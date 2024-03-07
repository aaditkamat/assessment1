import { UUID } from "crypto";

export type Author = {
    id: UUID | null;
    name: string;
}
