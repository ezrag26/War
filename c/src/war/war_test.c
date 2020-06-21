#include <stdio.h>  /* printf */
#include <stdlib.h> /* alloc  */

#include "war.h"

#include "utils.h"

int main()
{
	card_t deck[CARDS_PER_DECK] = {0};
	player_t *player1 = CreatePlayer();
	player_t *player2 = CreatePlayer();
	card_t player1_hand[CARDS_PER_DECK] = {0};
	card_t player2_hand[CARDS_PER_DECK] = {0};
	int game_status = 0;
	size_t rounds = 0;

	if (NULL == player1)
	{
		if (NULL == player2)
		{
			return (1);
		}

		DestroyPlayer(player2);
		return (1);
	}

	SetNumOfCards(player1, CARDS_PER_DECK / 2);
	SetNumOfCards(player2, CARDS_PER_DECK / 2);
	SetHand(player1, player1_hand);
	SetHand(player2, player2_hand);

	CreateDeck(deck);
	ShuffleDeck(deck);
	/*puts("Shuffled Deck:");
	PrintDeck(deck, CARDS_PER_DECK);*/
	DealOutCards(deck, player1, player2);
	/*puts("\nplayer1:");
	PrintDeck(GetHand(player1), GetNumOfCards(player1));
	puts("\nplayer2:");
	PrintDeck(GetHand(player2), GetNumOfCards(player2));*/

	while (0 == game_status)
	{
		++rounds;
		/*puts("\nplayer1:");
		PrintDeck(GetHand(player1), GetNumOfCards(player1));
		puts("\nplayer2:");
		PrintDeck(GetHand(player2), GetNumOfCards(player2));*/
		game_status = Battle(player1, player2);

	}

	if (-1 == game_status)
	{
		puts("It's a TIE!");
	}

	if (GetNumOfCards(player1) == CARDS_PER_DECK)
	{
		puts("WINNER: Player 1!");
	}
	else
	{
		puts("WINNER: Player 2!");
	}
	printf("Game played for %lu rounds\n", rounds);


	DestroyPlayer(player1);
	DestroyPlayer(player2);
	return (0);
}
