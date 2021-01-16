export interface PokemonNameURL {
  name: string;
  url: string;
}

export interface Ability {
  ability: PokemonNameURL;
  is_hidden: boolean;
  slot: number;
}
export interface Forms {
  name: string;
  url: string;
}
export interface GameIndices {
  game_index: number;
  version: PokemonNameURL;
}
export interface HeldItems {
  item: PokemonNameURL;
  version_details: Array<{
    rarity: number;
    version: PokemonNameURL;
  }>;
}
export interface Moves {
  move: PokemonNameURL;
  version_group_details: Array<{
    level_learned_at: number;
    move_learn_method: PokemonNameURL;
    version_group: PokemonNameURL;
  }>;
}
export interface Species {
  name: string;
  url: string;
}

export type SpritesKeys =
  | 'back_default'
  | 'back_female'
  | 'back_shiny'
  | 'back_shiny_female'
  | 'front_default'
  | 'front_female'
  | 'front_shiny'
  | 'front_shiny_female';

export type Sprites = { [key: string]: string | undefined };

export interface Stats {
  base_stat: number;
  effort: number;
  stat: PokemonNameURL;
}
export interface Types {
  slot: number;
  type: {
    name:
      | 'normal'
      | 'fighting'
      | 'flying'
      | 'poison'
      | 'ground'
      | 'rock'
      | 'bug'
      | 'ghost'
      | 'steel'
      | 'fire'
      | 'water'
      | 'grass'
      | 'electric'
      | 'psychic'
      | 'ice'
      | 'dragon'
      | 'dark'
      | 'fairy'
      | 'unkwnon'
      | 'shadow';
    url: string;
  };
}
export interface ResponseByPokemonNameAPI {
  abilities: Array<Ability>;
  base_experience: number;
  forms: Array<Forms>;
  game_indices: Array<GameIndices>;
  height: number;
  held_items: Array<HeldItems>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Moves>;
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Array<Stats>;
  types: Array<Types>;
  weight: number;
}
