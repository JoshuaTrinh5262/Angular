import { Crisis } from "./crisis";

export const CRISIS: Crisis[] = [
    {
        id: 1,
        name: 'Alien invasion',
        description: 'Aliens have invaded the city and are destroying everything in sight.',
        location: 'New York City',
        status: 'Active'
    },
    {
        id: 2,
        name: 'Natural disaster',
        description: 'A hurricane is heading towards the coast and is expected to make landfall soon.',
        location: 'Miami, FL',
        status: 'Active'
            },
            {
        id: 3,
        name: 'Bank robbery',
        description: 'A group of armed robbers have taken hostages inside a bank.',
        location: 'Los Angeles, CA',
        status: 'Resolved'
        },
        {
        id: 4,
        name: 'Terrorist threat',
        description: 'Intelligence reports suggest that a terrorist group is planning an attack on a major city.',
        location: 'Washington, DC',
        status: 'Active'
        }
    ];