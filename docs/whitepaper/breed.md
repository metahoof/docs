![hero](/img/banners/BREED.png)

> Building Champions Through Strategy & Bloodline Mastery

## 1️⃣ Introduction to Breeding in MetaHoof

Breeding is one of the **most strategic and rewarding mechanics** in MetaHoof, allowing players to create **new
generations of racehorses** with inherited traits, unique bloodlines, and competitive advantages.

By carefully selecting parent horses, managing breed licenses, and understanding genetic probabilities, players can **optimize their stable for long-term success**—whether by producing elite racers, valuable marketplace assets, or
specialized breeding bloodlines.

Breeding in MetaHoof is not just about **creating more horses**—it's about **building a legacy of champions**.

## 2️⃣ How the Breeding System Works

Breeding in MetaHoof requires **two parent horses** and a **Breed License Uniq**, ensuring that every foal is **a
carefully planned genetic investment**.

### 🔹 Breeding Steps:

1. **Select Parent Horses** – Choose two compatible horses from your stable or the breeding marketplace.
2. **Use a Breed License** – Apply a **Breed License Uniq**, which defines breeding conditions such as **class,
   bloodline restrictions, and season availability**.
3. **Genetic Calculation & Trait Inheritance** – The foal’s **stats, traits, and class potential** are determined by a **genetic algorithm based on both parents**.
4. **Foal Minting** – The new horse is **minted as a unique NFT**, complete with its own **bloodline, attributes, and
   racing potential**.
5. **Growth & Development** – Newly bred foals **start untrained** and must be **raised, trained, and raced** to develop
   their full potential.

Breeding is not just about **luck**—it’s about **strategy, planning, and understanding the genetic probabilities of
inheritance**.

## 3️⃣ Bloodlines & Breed Types

MetaHoof's breeding system is designed to **preserve rarity, maintain competitive balance, and introduce real strategic depth** when selecting breeding pairs. The combination of **bloodlines and breed types** determines a horse’s **genetic stability, breeding potential, and overall value**.

### 🏇 Bloodline Hierarchy

Each bloodline specializes in a unique balance of performance traits. Below is a summary of their attribute ranges:

| Bloodline           | Speed (min–max) | Endurance (min–max) | Agility (min–max) | Temperament (min–max) | Breeding Potential |
| ------------------- | --------------- | ------------------- | ----------------- | --------------------- | ------------------ |
| **Mystic Fjord**    | 60–75           | 75–90               | 80–95             | 70–85                 | 60–100             |
| **Tempest Mustang** | 80–95           | 70–85               | 65–80             | 40–60                 | 60–100             |
| **Sakura**          | 70–88           | 68–82               | 82–95             | 65–90                 | 60–100             |
| **Mirage Arabians** | 68–88           | 70–85               | 72–88             | 68–85                 | 60–100             |

- **Mystic Fjord**: Top-tier endurance and strategic agility, with a stable temperament for consistent performance across varied tracks.
- **Tempest Mustang**: Explosive speed and raw power, moderate endurance, and a wilder temperament ideal for aggressive, high-stakes races.
- **Sakura**: Balanced speed with supreme agility, excelling in technical circuits and tight maneuvers, underpinned by strong adaptability.
- **Mirage Arabians**: Well-rounded stats providing reliable speed, solid stamina, and calm temperament for versatile race strategies.

Use these attribute ranges to align bloodline selection with race conditions and breeding goals:

- **Endurance-focused races** favor **Mystic Fjord**.
- **Sprint or power-driven competitions** suit **Tempest Mustang**.
- **Technical short-course events** highlight **Sakura**.
- **Balanced tracks** reward **Mirage Arabians**.

## 4️⃣ Breed Types & Their Impact

Breed Type determines **how a horse interacts with the breeding system**, affecting **foal quality, genetic predictability, and rarity**. While **bloodline comes from the Mare, breed type is determined by both parents** and influences **inheritance, longevity, and resale value**.

### 🔹 Breed Type Categories

✅ **Purebred** → Horses from a **single, uninterrupted lineage**, offering **high genetic stability and specialized traits**.  
✅ **Crossbreed** → Horses bred from **mixed lineages**, leading to **hybrid adaptability and diverse but unpredictable traits**.

### 📌 Key Advantages & Trade-offs

- **Purebreds** provide **genetic consistency**, making them reliable for **specific race strategies and breeding programs**.
- **Crossbreeds** inherit a **wider range of strengths**, offering **greater adaptability but less predictability** in breeding outcomes.

## 5️⃣ Trait Inheritance & Genetic Mechanics

Each foal in MetaHoof **inherits a unique combination of traits from both parents**, meaning careful **breeding
selection can refine a horse’s strengths over generations**.

### 📊 Inherited Traits

When breeding, a foal inherits a **combination of traits** from both parents, with some attributes influenced by **dominant-recessive probabilities**. This means **genetic advantages can carry over or evolve across multiple generations**.

#### **Core Inherited Traits:**

1. **Speed** – Determines **acceleration and peak velocity**.
2. **Endurance** – Affects **endurance over long distances**.
3. **Agility** – Governs how well the horse **navigates varying race conditions and adjusts to changing speeds during the race**.
4. **Temperament** – Influences **race strategy effectiveness**.
5. **Breeding Potential** - Indicates the genetic quality and capacity of a horse to produce offspring with superior traits. A horse with a higher Breeding Potential has a greater chance of passing down desirable attributes such as speed, stamina, and agility to its offspring, resulting in better race performance.

### 🧬 **Bloodline & Trait Inheritance**

- A foal’s **bloodline is always inherited from the Mare**, meaning the **mother's lineage determines the horse’s natural racing specialization**.
- The **breed type**, however, is defined by both parents and affects **trait inheritance, genetic stability, and rarity**.
- **Legendary breeds** have a **higher probability of retaining strong traits**, ensuring a minimum **quality threshold** for offspring.

Because of these inheritance mechanics, **selecting the right Mare and Stud is crucial** to achieving the **desired genetic mix** for competitive racing and future breeding potential.

### 🔹 Attribute Inheritance Algorithm

MetaHoof uses a weighted lineage algorithm to determine offspring performance attributes, ensuring that both recent and historical genetics contribute proportionally:

1. **Lineage Construction**

   - Recursively collect performance attributes of both sire and dam across all generations.
   - Assign each ancestor a `level`, where the base parents start at level 1 and increase by 1 each generation.

2. **Weight Calculation**

   - Let \(L\) be the maximum lineage depth. Compute base weight:
     $$
     w_{\text{base}} = \frac{100}{2^L - 1}
     $$
   - Ancestor at level \(i\) receives weight:
     $$
     w_i = w_{\text{base}} \times 2^{(L - i)}
     $$

3. **Weighted Averaging**

   - For each attribute (speed, endurance, agility, temperament, breedingPotential}\}\), compute:
     $$
     \bar{a} = \frac{\sum_{j=1}^{N} a_j\,w_j}{\sum_{j=1}^{N} w_j}
     $$

4. **Variation Factor**

   - Calculate breeding potential average:
     $$
     B_p = \frac{\text{dam.potential} + \text{sire.potential}}{2}
     $$
   - Define variation range:
     $$
     \Delta_{\min} = -10 + \frac{B_p}{10}, \quad
     \Delta_{\max} = 1 + \frac{B_p}{10}
     $$
Sample a random variation $(\delta\in[\Delta_{\min},\Delta_{\max}]\%)$ and adjust:

$$
a_{\text{offspring}} = \left\lfloor \bar{a} + \bar{a}\times\frac{\delta}{100}\right\rfloor
$$

5. **Final Output**
   - Returns integer values for each attribute, reflecting both genetic inheritance and breeding potential variation.

This algorithm balances genealogical depth with genetic potential, producing nuanced, unique performance traits for each new foal.

## 6️⃣ Breed Licenses & Controlled Scarcity

Unlike **unrestricted breeding systems**, MetaHoof’s breeding economy is **regulated by Breed License Uniqs**, ensuring
**scarcity and value retention**.

### 🔹 How Breed Licenses Work:

✔ **Mandatory for Breeding** – A **Breed License Uniq** is required for every new foal.  
✔ **Limited & Controlled Supply** – Certain licenses are **class-restricted, time-gated, or event-exclusive**.  
✔ **Prevents Market Oversaturation** – By requiring **licenses for breeding**, MetaHoof ensures **foals retain economic
value** over time.

Players can **acquire Breed Licenses through:**

- **Marketplace purchases** 💰 (Tradeable NFTs).
- **Seasonal rewards** 🏆 (Earned via competitions or events).
- **Limited-time drops** 🎟 (Available in breeding seasons).

Breed Licenses add **strategic depth**, making breeding a **deliberate, valuable decision rather than an unlimited
process**.

## 7️⃣ Breeding Cooldown & Generational Limits

> **Strategic Bloodline Management Through Controlled Breeding Cycles**

In **MetaHoof**, breeding is **a deliberate, strategic process**—not an unlimited action. To maintain **bloodline value, market balance, and long-term sustainability**, every horse experiences a **breeding cooldown** after mating.

Breeding cooldown ensures that **foals remain scarce**, preventing overpopulation while encouraging **careful breeding decisions**.

### 🔹 Understanding Cooldown Mechanics

After breeding, both the **stallion and mare** enter a **cooldown period** before they can breed again. However, their cooldown durations differ:

- **Mares have a longer cooldown** since they carry the foal, acting as the primary **bottleneck** in horse population growth.
- **Stallions recover faster** but have a **limited lifetime breeding capacity** (except for Genesis horses).

The **cooldown duration scales by generation**, meaning that higher-generation horses **require more time** between breedings.

### 🔹 Breeding Cooldown & Lifetime Limits

| **Generation**   | **Max Breedings (Lifetime)** | **Cooldown (Stallions)** | **Cooldown (Mares)** | **Max Foals per Year** |
| ---------------- | ---------------------------- | ------------------------ | -------------------- | ---------------------- |
| **Genesis (G1)** | **Unlimited**                | **14 days**              | **28 days**          | **12-13**              |
| **G2**           | **8 total**                  | **18 days**              | **35 days**          | **6-8**                |
| **G3**           | **5 total**                  | **25 days**              | **45 days**          | **4-5**                |
| **G4+**          | **3 total**                  | **40 days**              | **60 days**          | **2-3**                |

::: info **Key Takeaways**
- **Mares control the breeding pace**, limiting how quickly new foals enter the game.
- **Genesis horses (G1) have unlimited breeding potential** but still require cooldowns.
- **Higher generations (G3, G4+) take longer to breed**, ensuring that elite bloodlines remain rare.
- **The yearly foal output per horse is controlled**, preventing market oversaturation.
:::

### 🔹 Why Generational Cooldown Increases?

Each new generation inherits a **progressively longer breeding cooldown** to:

✅ **Control horse supply** and avoid excessive foal minting.  
✅ **Increase strategic decision-making**, making each breeding choice impactful.  
✅ **Preserve value in bloodlines** by making high-generation horses rarer.  
✅ **Encourage a balanced player economy**, preventing breeding monopolies.

By gradually increasing cooldown times per generation, MetaHoof ensures that **breeding remains a rewarding challenge rather than an unlimited mass-production system**.

### 🔹 Strategic Implications of Cooldowns

**🏆 Bloodline Planning:** Players must **carefully choose when to breed** based on cooldowns, ensuring that they don’t waste valuable breeding slots.

**🏇 Racing vs. Breeding:** Since **higher-generation horses take longer to breed**, they become **more valuable for racing** rather than just being used as breeding stock.

**📉 Supply & Demand:** The cooldown system ensures that foals remain **a valuable asset** rather than being overproduced, maintaining a **healthy in-game economy**.

### 🔹 Future Considerations: Dynamic Cooldown Events

MetaHoof may introduce **limited-time breeding events**, where cooldowns are temporarily reduced, offering:

✔ **Seasonal Breeding Windows** → Certain months with shorter cooldowns.  
✔ **Cooldown Reduction Items** → Rare items that **slightly decrease cooldown times**.  
✔ **Special Event Foals** → Exclusive foals **born only in specific breeding cycles**.

This creates a **dynamic breeding economy**, where players must adapt their **breeding strategies** based on timing, cooldowns, and market conditions.

### 🔹 Conclusion

Breeding cooldowns in MetaHoof create a **balanced, strategic, and rewarding ecosystem**, where **every breeding decision matters**. With **longer cooldowns per generation**, **lifetime breeding caps**, and **carefully designed supply mechanics**, MetaHoof ensures that bloodlines **retain value, rarity, and competitive importance**.

This system **keeps the economy healthy, the gameplay engaging, and the breeding process an exciting challenge** for all players.

## 8️⃣ The Marketplace & Economic Value of Breeding

Since **every horse in MetaHoof is an NFT**, breeding has **real economic consequences**, shaping **supply, demand, and marketplace pricing**.

### 💰 How Breeding Creates Value in the Marketplace

- 📌 **Traders & Breeders Can Sell Foals** → Players can **breed, train, and sell** horses on the **Ultra Marketplace**.  
- 📌 **Bloodline Specialists Gain Reputation** → Stables with **high-performance lineages** will see **higher demand for
their offspring**.  
- 📌 **Crossbreeds vs. Purebreds Affect Pricing** → Some players **pay premium prices for predictable bloodlines**, while
others **seek out hybrid combinations** for unique advantages.  
- 📌 **Seasonal & Limited-Edition Breeding Events Drive Prices** → Special **one-time breeding opportunities** create
**rare horse NFTs with long-term value appreciation**.
