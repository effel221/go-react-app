import {KeyboardEvent} from "react";

export const onEnterSpaceDown = (e: KeyboardEvent,callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
        callback()
    }
}

