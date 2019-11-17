#include <stdio.h>  /* printf */
#include <stddef.h> /* size_t */
#include <stdlib.h> /* rand   */
#include <time.h>	/* time	  */

#define CARDS_PER_DECK (52)
#define CARDS_PER_SUIT (13)
#define NUM_OF_SUITS (4)

void CreateDeck();

int main()
{
	CreateDeck();
	return (0);
}

typedef struct card_s
{
	unsigned char card;
} card_t;
/*
typedef struct deck_s
{
	card_t *cards[CARDS_PER_DECK];
} deck_t;
*/
void PrintDeck(card_t deck[])
{
	size_t i = 0;
	unsigned char mask = (1 << 6) - 1;
	char suits[] = {'S', 'H', 'D', 'C'};

	printf("[");
	for (i = 0; i < CARDS_PER_DECK - 1; ++i)
	{
		printf("%d%c, ", deck[i].card & mask, suits[(deck[i].card & ~mask) >> 6]);
	}
	printf("%d%c]\n", deck[i].card & mask, suits[(deck[i].card & ~mask) >> 6]);
}

void ShuffleDeck(card_t deck[])
{
	size_t i = 0;
	size_t j = 0;
	size_t k = 0;
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

void CreateDeck()
{
	size_t i = 0;
	size_t j = 0;
	char suits[] = {'S', 'H', 'D', 'C'};
	card_t deck[CARDS_PER_DECK] = {0};

	for (i = 0; i < CARDS_PER_SUIT; ++i)
	{
		for (j = 0; j < NUM_OF_SUITS; ++j)
		{
			deck[i * 4 + j].card  = (i + 1) | (j << 6);
		}
	}
	ShuffleDeck(deck);

	PrintDeck(deck);

}
