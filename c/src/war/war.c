#include <stdio.h>  /* printf 		 */
#include <stdlib.h> /* rand, alloc   */
#include <time.h>	/* time	  		 */
#include <assert.h> /* assert 		 */

#include "war.h"

#include "utils.h"

#define CARDS_PER_DECK (52)
#define NUM_OF_SUITS (4)
#define CARDS_PER_SUIT ((CARDS_PER_DECK) / (NUM_OF_SUITS))
#define CARD_MASK ((1 << 6) - 1)
#define FACED_DOWN_DEFAULT (3)

#define ADD (0)
#define SUBTRACT (1)

struct player_s
{
	size_t num_of_cards;
	card_t *hand;
};

/*
typedef struct deck_s
{
	card_t *cards[CARDS_PER_DECK];
} deck_t;
*/

void CreateDeck(card_t deck[]);
void ShuffleDeck(card_t deck[]);
void DealOutCards(card_t deck[], player_t *player1, player_t *player2);
int Battle(player_t *player1, player_t *player2);
void PrintDeck(card_t deck[], size_t num_of_cards);

player_t *CreatePlayer()
{
	player_t *player = (player_t *)malloc(sizeof(player_t));

	if (NULL == player)
	{
		return (NULL);
	}

	return (player);
}

void DestroyPlayer(player_t *player)
{
	assert(NULL != player);

	free(player); player = NULL;
}

void CreateDeck(card_t deck[])
{
	size_t i = 0;
	size_t j = 0;

	for (i = 0; i < CARDS_PER_SUIT; ++i)
	{
		for (j = 0; j < NUM_OF_SUITS; ++j)
		{
			deck[i * 4 + j]  = (i + 1) | (j << 6);
		}
	}
}

void ShuffleDeck(card_t deck[])
{
	size_t i = 0;
	size_t j = 0;
	srand(time(NULL));

	for (i = 0; i < CARDS_PER_DECK; ++i)
	{
		size_t index = rand() % (CARDS_PER_DECK - i) + i;
		card_t tmp = deck[index];

		for (j = index; j > i; --j)
		{
			deck[j] = deck[j - 1];
		}
		deck[i] = tmp;
	}
}

void DealOutCards(card_t deck[], player_t *player1, player_t *player2)
{
	size_t i = 0;
	size_t j = 0;

	for (i = 0, j = 0; j < CARDS_PER_DECK; ++i, j += 2)
	{
		player1->hand[i] = deck[j];
		player2->hand[i] = deck[j + 1];
	}
}

static void MoveCardsDown(player_t *player)
{
	size_t i = 0;

	assert(NULL != player);

	for (i = 0; i < (size_t)player->num_of_cards - 1; ++i)
	{
		player->hand[i] = player->hand[i + 1];
	}
}

size_t War(player_t *player1, player_t *player2, player_t **winner, player_t **loser)
{
	size_t min_cards = 0;
	size_t flip_index = 0;

	assert(NULL != player1);
	assert(NULL != player2);
	assert(NULL != winner);
	assert(NULL != loser);

	min_cards = player1->num_of_cards < player2->num_of_cards ?
						   player1->num_of_cards :
						   player2->num_of_cards;

	/* (min_cards - 1) is index of card to flip if there are 4 or less cards */
	flip_index = MIN(min_cards - 1, FACED_DOWN_DEFAULT);

	while (1)
	{
		if (player1->hand[flip_index] > player2->hand[flip_index])
		{
			*winner = player1;
			*loser = player2;
			break;
		}
		else if (player2->hand[flip_index] > player1->hand[flip_index])
		{
			*winner = player2;
			*loser = player1;
			break;
		}
		else
		{
			if (0 == ((min_cards - 1) - flip_index))
			{
				return 0;
			}

			flip_index += MIN((min_cards - 1) - flip_index, FACED_DOWN_DEFAULT + 1);
		}
	}

	return (flip_index + 1);
}

static void UpdateCard(player_t *player, card_t card, size_t index)
{
	assert(NULL != player);

	player->hand[index] = card;
}

static void UpdateNumOfCards(player_t *player, unsigned int sign)
{
	assert(NULL != player);

	switch (sign)
	{
		case ADD:
			player->num_of_cards += 1;
			break;
		case SUBTRACT:
			player->num_of_cards -= 1;
			break;
		default:
			break;
	}
}

static void UpdateDecks(player_t *winner, player_t *loser, card_t winner_top, card_t loser_top)
{
	assert(NULL != winner);
	assert(NULL != loser);

	UpdateCard(winner, winner_top, winner->num_of_cards - 1);
	UpdateCard(winner, loser_top, winner->num_of_cards);
	UpdateNumOfCards(winner, ADD);
	UpdateCard(loser, (card_t)0, loser->num_of_cards - 1);
	UpdateNumOfCards(loser, SUBTRACT);
}

void Swap(card_t *card1, card_t *card2)
{
	card_t tmp = 0;

	assert(NULL != card1);
	assert(NULL != card2);

	tmp = *card1;
	*card1 = *card2;
	*card2 = tmp;
}

int Battle(player_t *player1, player_t *player2)
{
	player_t *winner = NULL;
	player_t *loser = NULL;
	size_t war_ret = 0;
	card_t winner_top = 0;
	card_t loser_top = 0;

	assert(NULL != player1);
	assert(NULL != player2);
	winner_top = player1->hand[0];
	loser_top = player2->hand[0];

	/**
	* move cards down in case of a war since War() assumes first card has been
	* removed already
	*/
	MoveCardsDown(player1);
	MoveCardsDown(player2);

	if ((winner_top & CARD_MASK) > (loser_top & CARD_MASK))
	{
		winner = player1;
		loser = player2;
	}
	else if ((winner_top & CARD_MASK) < (loser_top & CARD_MASK))
	{
		winner = player2;
		loser = player1;
		Swap(&winner_top, &loser_top);
	}
	else /* war */
	{
		war_ret = War(player1, player2, &winner, &loser);

		if (0 == war_ret)
		{
			return (-1);
		}
	}

	UpdateDecks(winner, loser, winner_top, loser_top);

	while (0 < war_ret-- && loser->num_of_cards > 0)
	{

		winner_top = winner->hand[0];
		loser_top = loser->hand[0];
		MoveCardsDown(winner);
		MoveCardsDown(loser);
		UpdateDecks(winner, loser, winner_top, loser_top);
	}

	if (0 == player1->num_of_cards || 0 == player2->num_of_cards)
	{
		return (1);
	}

	return (0);
}

void PrintDeck(card_t deck[], size_t num_of_cards)
{
	size_t i = 0;
	char suits[] = {'S', 'H', 'D', 'C'};

	if (0 == num_of_cards)
	{
		return;
	}

	printf("[");
	for (i = 0; i < num_of_cards - 1; ++i)
	{
		printf("%d%c, ", deck[i] & CARD_MASK, suits[(deck[i] & ~CARD_MASK) >> 6]);
	}
	printf("%d%c]\n", deck[i] & CARD_MASK, suits[(deck[i] & ~CARD_MASK) >> 6]);
}

void SetNumOfCards(player_t *player, size_t num_of_cards)
{
	assert(NULL != player);

	player->num_of_cards = num_of_cards;
}

size_t GetNumOfCards(player_t *player)
{
	assert(NULL != player);

	return (player->num_of_cards);
}

void SetHand(player_t *player, card_t deck[])
{
	assert(NULL != player);
	assert(NULL != deck);

	player->hand = deck;
}

card_t *GetHand(player_t *player)
{
	assert(NULL != player);

	return (player->hand);
}
