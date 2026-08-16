# Task: Add New Skill Categories to Portfolio

Update the existing portfolio website (Next.js project, skills data likely in `data/skills.ts` or similar) by adding two new skill categories to the **Skills** section. Keep the existing categories (Languages, Frameworks & Libraries, Backend/Deployment, Databases, Tools, Soft Skills) unchanged — only add the new ones below in the same visual style (icon chips / grid, consistent with the rest of the section).

Place these two new categories logically near related technical categories (e.g. after "Frameworks & Libraries" or grouped with other technical/algorithmic skills), not mixed into Soft Skills.

---

## New Skill Category 1: Data Structures & Algorithms

Label: **Data Structures & Algorithms**

Items:
- Data Structures (general)
- Sliding Window
- Two Pointers
- Fast & Slow Pointers
- Min-Heap / Max-Heap
- Binary Search
- Binary Search Tree
- Dijkstra's Algorithm
- A* Search
- Theta* Search
- Monte Carlo Tree Search (MCTS)

## New Skill Category 2: Game AI

Label: **Game AI**

Items:
- Steering Behaviors
- Finite State Machines (FSM)
- Reinforcement Learning
- Generative AI

---

## Implementation Notes

- Add both categories as new entries in the same typed data structure used for existing skills (do not hardcode into JSX).
- Match the existing chip/tag/grid styling and animation (scroll-reveal, hover states) already used for other skill categories — no new design pattern needed.
- If the current Skills layout is a single flat grid without category grouping, instead group all skills under labeled subsections (existing + these 2 new ones) so the new categories are clearly distinguishable.
- Do not remove or reword any existing skill items.
- After the change, update `NOTES.md` with a short line noting these two categories were added.
