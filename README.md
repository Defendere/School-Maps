# School-Maps


## frameworks
### python  (Django/Flask)
easy to use and implement, lots of library's
may be slow to run pathfinder algorithms and things like that when on mobile devices
indentation

### Js/Ts (react/solid)
Not all of us are as good at each other when it comes to these library's but it does make it easer to style.

### Rust (Rocket/Actix Web)
Fast & nick gets to learn a good language
more complex to set up (i think, idk)
has web assembly


<details>
<summary>plan</summary>
<pre>


         a line shows the shortest path between the 2 points
               │
               │
             ┌─┼───────────────────────────────────────────┐
             │ │                                           │
             │ │                                           │  ◄──────────The map uses a grid system relative to an arratury point
             │ │   ┌─────────┐      ┌───────┐              │             that is kept constant wth the position of the map
             │ │   │MH       │      │B      │              │
             │ ▼   ├────┐    │      │       │              │
             │  ┌──┤MH3 │    │      │       │   ◄──────────┼──────┐
             │  │  ├────┘    │      │       │              │      │
             │  │  │         │      └───────┘              │      │
             │  │  │         │                             │      │
             │  │  │         │                             │      │
             │  │  │         │                             │      │             - each block is stored as 4 points relative to the overlay grid
             │  │  └─────────┘        ┌───────────┐        │      │               (not visible to end user)
             │  │                     │E          │        │      │             - each classroom is stored as another 4 points + the name of the parent block
             │  └─────────────────┐   │           │        │      │             -
             │                    │   │           │        │      │
             │  ┌────────────┐    │   │           │        │      │
             │  │C           │    │   │           │        │      │
             │  │            │    │   │           │        │      │
             │  └──────┐     │    │   │           │        │      │
             │         │     │    │   ├───┐       │        │
             │         │     │    └─► │e6 │       │        │   each block is labeled
             │         │     │        └───┴───────┘        │
             │         │     │          ▲                  │
             │         │     │          │                  │
             │         └─────┘          │                  │
             │     ▲                    │                  │
             │   ◄ O ►                  └──────────────────┼─────The target classroom is outlined
           ┌─┼─►   ▼                                       │
           │ │                                             │
           │ │                                             │
           │ │                                             │
           │ │                                             │
           │ │ ┌────────────┐           ┌───────────────┐  │
           │ │ │ MH3        │ ────────► │ E6            │  │
           │ │ │            │  5 min    │               │  │   ◄─────input elements to select start and end classrooms
           │ │ └────────────┘(estimate) └───────────────┘  │
           │ │                                             │
           │ └─────────────────────────────────────────────┘
           │
           │
           │
           │
           │

          Map can be moved and zoomed ect...


</pre>
</details>