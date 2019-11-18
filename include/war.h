#ifndef __EZRA_CARD_GAMES_WAR_H__
#define __EZRA_CARD_GAMES_WAR_H__

#include <stddef.h> /* size_t 		 */

#define CARDS_PER_DECK (52)
#define NUM_OF_SUITS (4)
#define CARDS_PER_SUIT ((CARDS_PER_DECK) / (NUM_OF_SUITS))

typedef unsigned char card_t;

typedef struct player_s player_t;

player_t *CreatePlayer();

void DestroyPlayer(player_t *player);

void CreateDeck(card_t deck[]);

void ShuffleDeck(card_t deck[]);

void DealOutCards(card_t deck[], player_t *player1, player_t *player2);

void MoveCardsDown(player_t *player);

size_t War(player_t *player1, player_t *player2, player_t **winner, player_t **loser);

void UpdateCard(player_t *player, card_t card, size_t index);

void UpdateNumOfCards(player_t *player, unsigned int sign);

void UpdateDecks(player_t *winner, player_t *loser, card_t winner_top, card_t loser_top);

void Swap(card_t *card1, card_t *card2);

int Battle(player_t *player1, player_t *player2);

void PrintDeck(card_t deck[], size_t num_of_cards);

void SetNumOfCards(player_t *player, size_t num_of_cards);

size_t GetNumOfCards(player_t *player);

void SetHand(player_t *player, card_t deck[]);

card_t *GetHand(player_t *player);

#endif /* __EZRA_CARD_GAMES_WAR_H__ */
