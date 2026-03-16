![hero](/img/banners/HORSES.png)

# Horses — Simple Guide

In MetaHoof, every horse is a **unique digital legend**.

Each horse has a combination of **identity, appearance, and physical attributes** that determine how it performs on the racetrack.

Understanding your horse helps you:

- Choose better race strategies
- Train and progress efficiently
- Build stronger bloodlines
- Increase long‑term competitive value

MetaHoof horses are designed to behave like real racing athletes. Their performance emerges from **attributes, strategy, stamina management, and race dynamics**, not just raw numbers.

## 🌟 Horse Overview

Every horse in MetaHoof is defined by three core layers:

| Layer         | Purpose                                           |
| ------------- | ------------------------------------------------- |
| 🧬 Identity   | Bloodline, gender, generation and lineage         |
| 🎨 Appearance | Cosmetic traits that define visual style          |
| ⚡ Attributes | Physical capabilities used by the race simulation |

Together these layers shape your horse’s **career, potential, and value**.

### 🔍 Reveal Status

Some horses start as **unrevealed**.

| Attribute | Description                                     |
| --------- | ----------------------------------------------- |
| Status    | Indicates whether the horse traits are revealed |

**Default:** `Unrevealed`

Before reveal, horses appear as mystery placeholders. Once revealed, the full identity and attributes become visible.

## 🧬 Identity & Genetics

These traits define the horse’s origin and breeding potential.

### Bloodline

Bloodlines represent the **genetic heritage** of the horse.

Available bloodlines include:

- Fjord
- Sakura
- Mirage
- Mustang

Each bloodline tends to favor different racing profiles.

Some may naturally produce faster sprinters, while others excel at endurance.

### Gender

| Value    | Description  |
| -------- | ------------ |
| Mare     | Female horse |
| Stallion | Male horse   |

Gender matters primarily for **breeding mechanics**.

### Breed Type

| Value | Meaning                            |
| ----- | ---------------------------------- |
| Pure  | Single bloodline ancestry          |
| Mixed | Combination of multiple bloodlines |

Lineage influences **breeding outcomes and genetic variation**.

### Generation

Generation indicates how early the horse appeared in MetaHoof history.

Example:

- `G1` → Genesis horses
- `G2+` → Later generations

Earlier generations typically hold **higher collectible and historical value**.

### Age Stage

Horses evolve over time.

| Stage   | Description            |
| ------- | ---------------------- |
| Foal    | Young developing horse |
| Adult   | Prime racing stage     |
| Veteran | Experienced competitor |

Age affects **progression, stamina behavior, and long‑term development**.

## 🎨 Appearance & Cosmetics

Appearance traits define **how the horse looks**, but they **do not affect race performance**.

| Trait          | Description                |
| -------------- | -------------------------- |
| Coat           | Base color and patterns    |
| Mane           | Mane style                 |
| Eyes           | Expression and personality |
| Mouth          | Cosmetic item              |
| Head Accessory | Decorative accessory       |
| Coat Accessory | Visual gear                |
| Rarity Marks   | Special markings           |

These traits help create **visual identity and collectibility**.

## ⚡ Core Racing Attributes

MetaHoof horses have three core physical attributes that influence race behavior.

| Attribute | Role                                       |
| --------- | ------------------------------------------ |
| Speed     | Determines natural running pace            |
| Endurance | Controls stamina efficiency                |
| Power     | Determines acceleration and responsiveness |

Inside the race simulation these values are normalized into a **1–10 effective scale** after applying:

- progression
  n- trainer bonuses
- age effects
- temperament modifiers

These attributes are **not isolated stats**.

They act as **performance modifiers inside the race simulation**, influencing how the horse behaves during the race.

### 🐎 Speed

#### What Speed Represents

Speed defines the horse’s **natural running pace**.

It determines the **baseline velocity** the horse can achieve under normal racing conditions.

In the simulation, Speed contributes to the horse’s base velocity:

```
baseSpeed = CONFIG.baseSpeedMPS * speedFactor
```

Where the **speedFactor** is derived from the horse's Speed level.

### Effects of High Speed

Horses with higher Speed:

- Run faster during normal racing phases
- Cover more distance per simulation tick
- Have higher potential race pace

#### What Speed Does NOT Affect

Speed does **not control**:

- Acceleration
- Stamina consumption
- Reaction speed
- Sprint timing
- Tactical responsiveness

Those behaviors are governed by other attributes.

#### Gameplay Meaning

Speed determines **how fast a horse can run when conditions are ideal**.

However, without enough stamina or responsiveness, even a fast horse can lose races.

### 🏃 Endurance

#### What Endurance Represents

Endurance measures the horse’s **stamina efficiency and fatigue resistance**.

It determines how efficiently the horse converts energy into sustained performance during the race.

#### Simulation Behavior

Endurance reduces stamina drain using a nonlinear efficiency curve:

```
staminaDrainMultiplier = enduranceDiscount(enduranceLevel)
```

Higher Endurance results in progressively stronger stamina efficiency.

#### Effects of High Endurance

Horses with strong Endurance:

- Lose stamina more slowly
- Maintain speed for longer periods
- Perform better in long races
- Preserve stamina for late‑race sprints

#### Effects of Low Endurance

Low Endurance horses tend to:

- Drain stamina quickly
- Enter fatigue states earlier
- Lose speed in longer races

#### What Endurance Does NOT Affect

Endurance does **not directly change**:

- Maximum speed
- Acceleration
- Tactical reactions

It strictly affects **energy efficiency and stamina longevity**.

### 💥 Power

#### What Power Represents

Power represents the horse’s **physical strength and explosive capability**.

Within the simulation, Power translates into **Agility**, which controls how quickly a horse can change speed or react to race conditions.

#### Simulation Effects

Power influences acceleration through the following relationship:

```
accelerationScale = 0.8 + agilityFactor * 0.4
```

Where **agilityFactor** is derived from the horse's Power attribute.

Higher Power improves:

- Acceleration toward target speed
- Reaction time during tactical moments
- Responsiveness to sprint triggers
- Ability to react in dense race packs

#### Effects of Low Power

Low Power horses typically:

- Accelerate more slowly
- React later to race dynamics
- Struggle to respond to tactical shifts

#### What Power Does NOT Affect

Power does **not increase**:

- Maximum speed
- Stamina efficiency

It only affects **how quickly the horse can adjust its speed during the race**.

## ⚙️ Attribute Interaction

The three attributes work together to create a horse’s racing profile.

| Attribute | Primary Role   | Key Effect                          |
| --------- | -------------- | ----------------------------------- |
| Speed     | Pace           | Determines base running velocity    |
| Endurance | Stamina        | Reduces fatigue and stamina drain   |
| Power     | Responsiveness | Improves acceleration and reactions |

Final race outcomes emerge from the interaction between:

- Horse attributes
- Player race strategy
- Track conditions
- Stamina management
- Pack dynamics
- Random race variance

This creates a **skill‑driven racing system**, where strategy and horse selection both matter.

## 🧩 Placeholder Horses

Before reveal, some horses appear as **mystery placeholders**.

Placeholder horses show:

- Hidden attributes
- Mystery artwork
- Unknown bloodline

Example:

> "A mysterious horse awaits..."

Once revealed, the full horse profile becomes available.

## 🏆 Why Attributes Matter

Your horse’s attributes influence:

- Race performance
- Strategy selection
- Breeding outcomes
- Market value
- Competitive ranking

Successful stable owners analyze their horses and build strategies around their strengths.

## 📈 Example Horse Profile

```
Name: Thunder Sakura
Bloodline: Sakura
Gender: Stallion
Generation: G1
Lineage: Pure
Age: Adult

Speed: 90
Endurance: 70
Power: 80

Eyes: Smart
Mane: Windflow
Rarity: Gold Mark
```

**Result:**

A fast and responsive racer capable of strong sprint finishes.

## 🚀 Long‑Term Progression

Over time, horses will:

- Gain experience
- Improve attributes
- Age and evolve
- Influence offspring

MetaHoof is designed as a **long‑term competitive ecosystem**, where mastering your stable and understanding your horses is key to success.
