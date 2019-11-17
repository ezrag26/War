#include <stdio.h>  /* printf */
#include <stddef.h> /* size_t */
#include <stdlib.h> /* rand, alloc   */
#include <time.h>	/* time	  */

#define CARDS_PER_DECK (52)
#define CARDS_PER_SUIT (13)
#define NUM_OF_SUITS (4)
#define CARD_MASK ((1 << 6) - 1)

typedef unsigned char card_t;
typedef struct player_s
{
	int num_of_cards;
	card_t *hand;
} player_t;
/*
typedef struct deck_s
{
	card_t *cards[CARDS_PER_DECK];
} deck_t;
*/

void CreateDeck(card_t deck[]);
void ShuffleDeck(card_t deck[]);
void DealOutCards(card_t deck[], player_t *player1, player_t *player2);
void Battle(player_t *player1, player_t *player2);
void PrintDeck(card_t deck[], size_t num_of_cards);

int main()
{
	card_t deck[CARDS_PER_DECK] = {0};
	player_t *player1 = (player_t *)malloc(sizeof(player_t));
	player_t *player2 = (player_t *)malloc(sizeof(player_t));
	card_t player1_hand[CARDS_PER_DECK] = {0};
	card_t player2_hand[CARDS_PER_DECK] = {0};

	player1->num_of_cards = CARDS_PER_DECK / 2;
	player2->num_of_cards = CARDS_PER_DECK / 2;

	player1->hand = player1_hand;
	player2->hand = player2_hand;

	CreateDeck(deck);
	ShuffleDeck(deck);
	PrintDeck(deck, CARDS_PER_DECK);
	DealOutCards(deck, player1, player2);
	printf("\nplayer1: ");
	PrintDeck(player1->hand, player1->num_of_cards);
	printf("\nplayer2: ");
	PrintDeck(player2->hand, player2->num_of_cards);
	printf("\n");

	while (player1->num_of_cards != CARDS_PER_DECK &&
		   player2->num_of_cards != CARDS_PER_DECK)
	{
		Battle(player1, player2);
	}

	if (player1->num_of_cards == CARDS_PER_DECK)
	{
		printf("Player 1 wins!");
		PrintDeck(player1->hand, CARDS_PER_DECK);
	}
	else
	{
		printf("Player 2 wins!");
		PrintDeck(player2->hand, CARDS_PER_DECK);
	}


	free(player1); player1 = NULL;
	free(player2); player2 = NULL;
	return (0);
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

void MoveCardsDown(player_t *player)
{
	size_t i = 0;

	for (i = 0; i < (size_t)player->num_of_cards - 1; ++i)
	{
		player->hand[i] = player->hand[i + 1];
	}
}

void Battle(player_t *player1, player_t *player2)
{
	card_t player1_top = player1->hand[0];
	card_t player2_top = player2->hand[0];
	card_t player1_war = 0;
	card_t player2_war = 0;
	size_t i = 0;
	size_t j = 0;
	size_t k = 0;

	if ((player1_top & CARD_MASK) > (player2_top & CARD_MASK))
	{
		MoveCardsDown(player1);
		MoveCardsDown(player2);
		player1->hand[player1->num_of_cards - 1] = player2_top;
		player1->hand[player1->num_of_cards] = player1_top;
		player1->num_of_cards += 1;
		player2->num_of_cards -= 1;
	}
	else if ((player1_top & CARD_MASK) < (player2_top & CARD_MASK))
	{
		MoveCardsDown(player1);
		MoveCardsDown(player2);
		player2->hand[player2->num_of_cards - 1] = player1_top;
		player2->hand[player2->num_of_cards] = player2_top;
		player2->num_of_cards += 1;
		player1->num_of_cards -= 1;
	}
	else
	{
		for (i = 1; i < 4 && i < (size_t)player1->num_of_cards; ++i)
		{
			player1_war = player1->hand[i];
		}
		--i;

		for (j = 1; j < 4 && j < (size_t)player2->num_of_cards; ++j)
		{
			player2_war = player2->hand[j];
		}
		--j;

		if ((player1_war & CARD_MASK) > (player2_war & CARD_MASK))
		{
			for (k = 0; k < j; ++k)
			{
				player1_top = player1->hand[0];
				player2_top = player2->hand[0];
				MoveCardsDown(player1);
				MoveCardsDown(player2);
				player1->hand[player1->num_of_cards - 1] = player2_top;
				player1->hand[player1->num_of_cards] = player1_top;
				player1->num_of_cards += 1;
				player2->num_of_cards -= 1;

			}
			while (k < j)
			{
				player1_top = player1->hand[0];
				MoveCardsDown(player1);
				player1->hand[player1->num_of_cards - 1] = player1_top;
			}
		}
		else if ((player1_war & CARD_MASK) < (player2_war & CARD_MASK))
		{
			for (k = 0; k < i; ++k)
			{
				player1_top = player1->hand[0];
				player2_top = player2->hand[0];
				MoveCardsDown(player1);
				MoveCardsDown(player2);
				player2->hand[player2->num_of_cards - 1] = player1_top;
				player2->hand[player2->num_of_cards] = player2_top;
				player2->num_of_cards += 1;
				player1->num_of_cards -= 1;
			}

			while (k < j)
			{
				player2_top = player2->hand[0];
				MoveCardsDown(player2);
				player2->hand[player2->num_of_cards - 1] = player2_top;
			}
		}
	}
}

void PrintDeck(card_t deck[], size_t num_of_cards)
{
	size_t i = 0;
	char suits[] = {'S', 'H', 'D', 'C'};

	printf("[");
	for (i = 0; i < num_of_cards - 1; ++i)
	{
		printf("%d%c, ", deck[i] & CARD_MASK, suits[(deck[i] & ~CARD_MASK) >> 6]);
	}
	printf("%d%c]\n", deck[i] & CARD_MASK, suits[(deck[i] & ~CARD_MASK) >> 6]);
}
