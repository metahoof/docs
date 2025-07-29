<!-- ![hero](/img/banners/STAKE.png) -->

# Horse Staking

Horse Staking is a key system that powers MetaHoof’s Free-to-Play access and creates a new layer of utility and strategy for horse owners.

## 🎯 Purpose

The staking pool enables players without owned horses to participate in races by borrowing staked horses. These horses are supplied primarily by Player’s Horses and, when needed, by the platform itself.

## 🧩 Core Mechanics

Players can stake their horses under two conditions:

| Condition      |
| -------------- |
| Duration-based |
| Usage-based    |

A minimum lock-in of **24 hours or 10 races** applies. Whichever comes first will trigger the end of staking, and the horse will automatically return to its original owner, provided it is not currently in a race.

### Maximum Commitment

| Maximum Condition | Value                    |
| ----------------- | ------------------------ |
| Duration-based    | 30 days                  |
| Usage-based       | 100 races                |
| Aging-based       | Up to the next age stage |

- Horses return automatically at max duration, race count, or when aging to the next stage.
- Owners may re-stake eligible horses (full energy, not max decay).

This system prevents indefinite parking while tying staking to the natural aging and decay mechanics.

## ✅ Eligibility & Restrictions

| Restrictions and Conditions                                                  |
| ---------------------------------------------------------------------------- |
| Transferred to a **staking smart contract** (ownership temporarily assigned) |
| Cannot be **bred**, **upgraded class**, or **resold**                              |
| Can only be reclaimed by the original owner after the minimum commitment     |
| Must be in **full energy state** to be eligible                              |
| Must not have reached **maximum decay (Level 8)**                            |

## 📈 Staking Lifecycle

| Stage             | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| **Stake**         | Owner stakes horse (must have full energy and not be at max decay).        |
| **Lock Period**   | Minimum of 24 hours OR 10 races, whichever comes first.                    |
| **Active Usage**  | Horse participates in eligible races (Casual, PvE Ranked, etc.).           |
| **XP & Aging**    | Horse continues to gain XP and age; decay system applies as normal.        |
| **Max Threshold** | Ends after 30 days, 100 races, or upon reaching the next age stage.        |
| **Auto Return**   | Horse is returned automatically once conditions are met or thresholds hit. |
| **Re-Stake**      | Owner may re-stake if horse is still eligible.                             |

## 💰 Remuneration

To reward staking participation, **1% of all event entry fees** are allocated to a **staking reward pool**. Distribution happens **weekly** in $UOS, based on points:

| Race Type         | Points Earned  |
| ----------------- | -------------- |
| Casual Race       | +1 point       |
| PvE Ranked Race   | +2 points      |
| Future Race Types | TBD (weighted) |

- Points reflect horse activity and race type.
- Owners can track races, points, and rewards via the staking dashboard.
- The 1% pool may be adjusted in the future through governance.

## 🐋 Fairness & Anti-Whale Measures

| Measure                  | Description                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| **Per-User Reward Cap**  | A single account can earn a maximum of 8% of the weekly staking pool.                     |
<!-- | **Diminishing Returns**  | After 5 horses, each additional horse counts at reduced efficiency (e.g., 70%, then 50%). | -->
| **Activity Requirement** | Horses must run at least 3 races per week to qualify.                                     |
| **Eligibility Filters**  | Only horses with full energy and below maximum decay (Level 8) are eligible.              |
| **Seasonal Resets**      | All staking metrics reset each season to prevent compounding advantages.                  |

These measures ensure fairness while keeping the staking pool vibrant and useful for Free-to-Play players.

## 🧑‍🌾 Platform-Owned Horses

| Priority and Treatment                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Player horses have priority**                                                                                                                                                                                                                       |
| Platform-owned horses fill the pool when player-supplied horses are insufficient. They follow the same usage rules but may be retired at the platform’s discretion (e.g., resold, auctioned, or burned when no longer fit, such as at maximum decay). |

## 🧰 Control Panel & Player Experience

Owners can:

| Feature              | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Staking Status       | View remaining time/races for each staked horse              |
| Performance Tracking | Track horse race history and staking rewards                 |
| Management Options   | Extend or cancel staking after the lock-in, if horse is idle |

Staked horses remain visible in the stable in **read-only mode**.

## 🧵 Free-to-Play Link

| Prize Distribution                                                                        |
| ----------------------------------------------------------------------------------------- |
| **20% of any prize won** by an F2P player using a staked horse goes to the original owner |

- Owners see which player used their horse and its performance logs.
- Direct interaction with borrowers is disabled to ensure fairness.

## 🔮 Future Expansions

| Planned Features                                                               |
| ------------------------------------------------------------------------------ |
| **Staking tiers** (e.g. Bronze, Silver, Gold) to reward more committed stakers |
| **Rental Vaults** for race-type-specific horse pools                           |
| **DAO governance** to adjust reward percentages and system rules               |

By staking your horse, you power MetaHoof’s player growth while turning your stable into a revenue stream — even when you're not racing.
