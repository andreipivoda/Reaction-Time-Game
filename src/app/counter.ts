import { ActionReducer, Action } from '@ngrx/store';

export const IDLE = 'IDLE';
export const START_ROUND = 'STARTROUND';
export const END_ROUND = 'END_ROUND';
export const GAME_OVER = 'GAMEOVER';

export function counterReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case IDLE:
            return state + 1;

        case START_ROUND:
            return state - 1;

        case END_ROUND:
            return 0;
        case GAME_OVER:
            return 0;

        default:
            return state;
    }
}