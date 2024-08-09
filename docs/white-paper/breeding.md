# Breeding System <!-- {docsify-ignore} -->

MetaHoof's breeding system empowers players to strategically create new horses by combining the genetic traits of two
parent horses. This system is designed to enhance strategic gameplay and maintain a balanced, dynamic environment. The
revised breeding system focuses on clarity, fairness, and strategic depth, without any elements that might be associated
with gambling.

## Genetic Attributes

In MetaHoof, each horse has a range of genetic attributes that influence its racing performance, appearance, and overall
potential. These attributes are rated on a scale of 1 to 10 and are encoded in a genetic sequence. The key genetic
attributes are:

1. **Performance Specialization**
    - **Distance:** Short, Mid, Long (1-10 each)
    - **Endurance:** Stamina, Recovery Speed (1-10 each)

2. **Speed and Agility**
    - **Starting Speed:** 1-10
    - **Cornering Ability:** 1-10
    - **Top Speed:** 1-10

3. **Health and Temperament**
    - **Injury Resistance:** 1-10
    - **Disease Resistance:** 1-10
    - **Calmness:** 1-10
    - **Aggressiveness:** 1-10

4. **Trainability and Adaptability**
    - **Learning Speed:** 1-10
    - **Adaptability:** PhotonFlex Track, NanoTurf, ElectroGrid Ground (1-10 each)

5. **Environmental Adaptability**
    - **Weather Adaptability:** Neon Fog, ElectroStorms, Thermal Waves (1-10 each)

## Inheritance Mechanics

The inheritance mechanics ensure that offspring inherit traits from their parents in a balanced and predictable manner.
The breeding system uses trait averaging and genetic variation to determine the traits of the offspring.

### Trait Averaging and Variation

Traits are inherited by averaging the traits of the parent horses, with a controlled variation to maintain uniqueness.
Here’s a simplified explanation:

### Trait Averaging Formula

The trait value for the offspring is calculated as follows:

$$
T_{\text{offspring}} = \frac{T_{\text{parent1}} + T_{\text{parent2}}}{2}
$$

Where:

$\( T_{\text{parent1}} \) $ and $\( T_{\text{parent2}} \)$ are the trait values of the respective parents.

### Introducing Genetic Variation

To introduce a degree of uniqueness, a small variation is applied:

$$
T_{\text{offspring}} = \left( \frac{T_{\text{parent1}} + T_{\text{parent2}}}{2} \right) \times (1 + V)
$$

Where:

- \( V \) is a small variation factor, typically within a ±10% range.

### Ensuring Boundaries

To maintain trait values within the 1-10 scale, apply boundaries:

$$
T_{\text{offspring}} = \text{max}(1, \text{min}(10, T_{\text{offspring}}))
$$

### Generational Progression

- **Generation Increase:** Offspring’s generation is one level higher than the higher generation parent.
    - Example: G1 Stallion + G2 Mare = G3 Offspring

### Improvement and Deterioration

- **Improvement:** Traits can slightly improve due to positive variation.
- **Deterioration:** Traits can deteriorate due to negative variation.
- **Mutations:** Rare mutations may introduce significant changes to ensure diversity.

## Breeding Rules

1. **Pairing:**
    - One Stallion and one Mare can breed.
    - Offspring’s generation is determined by the higher generation parent plus one.

2. **Breeding Fees:**
    - Base fees are set for each breed type, increasing with the stallion’s generation.
    - Additional fees are based on parent generations.

3. **Cooldown Periods:**
    - Different cooldown periods for racing and breeding to manage activity frequency.

## Breeding Process

The process is straightforward, ensuring players can easily engage with the system:

1. **Select Parent Horses:**
    - Choose a Mare and Stallion from your stable.

2. **Pay Breeding Fee:**
    - Deduct the appropriate breeding fee based on breed type and generation.

3. **Confirm Breeding:**
    - Confirm the breeding request.

4. **Apply Cooldown Period:**
    - Both parents enter a cooldown period.

5. **Generate Offspring:**
    - New horse is generated with inherited traits and added to the player's stable after a short waiting period.

6. **Notification:**
    - Players are notified of the new horse’s arrival.

## Genetic Trait Progression

### Averaging and Variation

- Traits are averaged and slightly varied to introduce uniqueness.

### Potential for Improvement

- Traits can improve or deteriorate slightly due to genetic variations.

### Balancing Generations

- **Generational Drift:** Traits may average out over generations, so introducing rare mutations or special events can
  maintain diversity.

## Healthy Ecosystem Considerations

### Economic Balance

- **Breeding Costs and Rewards:** Ensure breeding costs scale with the benefits gained from higher traits in future
  generations. Regularly adjust fees to match the game’s economic status and player activity.
- **Supply and Demand:** Control the number of new horses introduced through breeding to prevent oversupply, which could
  devalue horses.

### Player Engagement

- **Incentives for Breeding:** Offer incentives for players to breed horses, such as special events, limited-time
  traits, or exclusive items.
- **Fairness:** Maintain a balance where newer players can still compete and have a chance to breed valuable horses
  without needing to spend excessively.

By implementing a detailed and balanced breeding system, MetaHoof offers a dynamic and engaging gameplay experience. The
strategic depth provided by genetic traits and inheritance mechanics encourages players to carefully plan their breeding
decisions, while maintaining a vibrant and diverse horse population within the game. This ensures a continually evolving
ecosystem that remains exciting for both new and experienced players.

## Breeding Policies

To ensure a balanced and fair breeding system in MetaHoof, we implement a set of breeding policies. These policies
outline the eligibility criteria for breeding, restrictions on breeding activities, and cooldown periods to manage the
frequency of breeding.

### Eligibility and Restrictions

Eligibility and restrictions determine which horses can participate in breeding and under what conditions. This includes
considerations for gender, generation, and familial relationships.

1. **Gender and Pairing:**
    - Only one Stallion (male) and one Mare (female) can breed.
    - Same-gender pairing is not allowed.

2. **Generation Restrictions:**
    - Horses from different generations can breed, with offspring generation one level higher.

3. **Familial Restrictions:**
    - Horses cannot breed with their direct relatives, including parents and siblings.
    - This restriction helps maintain genetic diversity and prevents inbreeding.

4. **Breeding Capacity:**
    - Each horse has a limited number of breedings per breeding period.
    - Example: A horse can participate in up to 3 breedings per month.

5. **Ownership and Permissions:**
    - Owners must have the necessary permissions to breed their horses. Horses listed for stud must have breeding rights
      enabled.
    - If a player uses another player’s Stallion for breeding, a stud fee must be paid.

6. **Breeding License:**
    - To breed horses, players must acquire a breeding license from the Breed License Factory.
    - Each class of horse will have a corresponding breeding license, and prices may vary based on supply and demand.
    - Breed licenses can be obtained through purchase or minted as rewards for completing quests or tasks within the
      game.
    - The availability of breeding licenses may be limited based on the overall health of the game's ecosystem.

### Cooldown Periods and Limitations

Cooldown periods and limitations ensure that horses are not overbred and help maintain the game's balance by controlling
the frequency of breeding activities.

1. **Breeding Cooldown:**
    - After breeding, both the Stallion and the Mare enter a cooldown period during which they cannot breed again.
    - The length of the cooldown period can vary based on the horse's breed and generation.
    - Example: A G1 horse may have a breeding cooldown of 7 days, while a G3 horse may have a breeding cooldown of 10
      days.

2. **Race Cooldown:**
    - Horses that have recently raced also have a cooldown period before they can breed.
    - This ensures that horses are not immediately bred after a race, maintaining their health and performance.
    - Example: A horse that raced must wait 3 days before it can breed.

3. **Limited Breeding Periods:**
    - Breeding periods are defined timeframes during which breeding limits are enforced (e.g., 1 month).
    - Each horse can participate in a maximum number of breedings per breeding period.
    - Example: During a 1-month breeding period, a horse can breed up to 3 times.

4. **Breeding Limits:**
    - Implementing breeding limits per period encourages strategic breeding and prevents market saturation.
    - Example: If a horse reaches its breeding limit for the month, it cannot breed again until the next period begins.

5. **Retirement and Lifespan:**
    - Horses have a finite lifespan and a limited number of active breeding periods.
    - Once a horse reaches the end of its lifespan or active breeding periods, it is retired from breeding.
    - Example: A horse may have a total lifespan of 24 months, after which it is retired.

### Example Scenarios

1. **Standard Breeding:**

- **Parent Horses:** G2 Stallion and G1 Mare
- **Breeding Capacity:** Each horse can breed up to 3 times per month.
- **Breeding Cooldown:** G2 Stallion (10 days), G1 Mare (7 days)
- **Breeding License:** Acquired from the Breed License Factory
- **Outcome:** After breeding, both horses enter their respective cooldown periods and cannot breed again until the
  cooldown is over.

2. **Using Stud Services:**
    - Stud fees and breeding capacity with private and public offers.

- **Owner A’s Mare:** G3 Mare
- **Owner B’s Stallion:** G2 Stallion (listed for stud)
- **Stud Fee:** 100 tokens
- **Breeding Capacity:** Mare can breed up to 3 times per month.
- **Breeding Cooldown:** G3 Mare (10 days), G2 Stallion (7 days)
- **Breeding License:** Acquired from the Breed License Factory
- **Outcome:** Owner A pays the stud fee to Owner B. After breeding, both horses enter their respective cooldown
  periods.

By establishing clear breeding policies, eligibility criteria, and cooldown periods, MetaHoof ensures a balanced and
strategic breeding system. These policies encourage thoughtful decision-making, maintain genetic diversity, and prevent
market oversaturation. The introduction of the Breed License Factory adds an additional layer of strategy and economic
balance, making the breeding process both engaging and sustainable for all players.

## Stud Offers

Stud offers are a crucial aspect of the breeding system in MetaHoof. They allow players to utilize high-quality
Stallions for breeding, enhancing the genetic traits of their offspring. This section details the stud fees and pricing
models, as well as the differences between public and private stud offers.

### Stud Fees and Minimum Values

Stud fees are the costs associated with using a Stallion for breeding. The base minimum fee is established to ensure
fairness, prevent market devaluation, and maintain economic stability. The minimum fee for using a Stallion is
determined by the base minimum value, which reflects the stallion's class and attributes. Other factors, specified by
the stallion owner, may influence the final fee. Here's how these elements work:

#### Base Minimum Value

- **Purpose:** The base minimum value ensures that stallion owners are fairly compensated and prevents the devaluation
  of high-quality stallions due to underpricing.
- **Determination:** Base minimum values are set according to the stallion's class and attributes, as follows:

    - **Class E Stallions:** $5 per breeding  
      *Rationale:* Designed for entry-level players, ensuring affordability while providing fair compensation for basic
      capabilities.

    - **Class D Stallions:** $10 per breeding  
      *Rationale:* Reflects improved attributes and potential, accommodating players advancing from Class E.

    - **Class C Stallions:** $20 per breeding  
      *Rationale:* For intermediate players, this value reflects advanced attributes and higher quality.

    - **Class B Stallions:** $40 per breeding  
      *Rationale:* Represents high-performing stallions, ensuring fair compensation for premium attributes and
      competitive edge.

    - **Class A Stallions:** $75 per breeding  
      *Rationale:* For top-tier stallions with exceptional attributes, maintaining exclusivity and high value.

#### Additional Factors

Stallion owners are responsible for specifying additional charges that can influence the final stud fee. These factors
include:

- **Generation Modifier:** Owners may apply a generation modifier to the base fee based on the stallion’s generation,
  reflecting pedigree and experience.

- **Demand and Market Conditions:** Owners can adjust the fee according to current market demand and conditions,
  allowing for dynamic pricing based on popularity and demand.

- **Special Attributes:** If a stallion possesses rare or special attributes, owners can set a premium fee to reflect
  these unique traits.

- **Breeding License:** Depending on the game's policies, a breeding license may be required, and its cost or conditions
  are determined separately.

The base minimum fee establishes the minimum cost for using a stallion, while the final stud fee may be higher based on
additional factors set by the stallion owner. This structure helps to maintain market integrity, ensure fair
compensation, and support a stable economic environment.

### Public vs. Private Stud Offers

Stud offers can be categorized into public and private offers, each with its own set of rules and accessibility.

1. **Public Offers:**
    - **Accessibility:** Available to all players in the game.
    - **Pricing:** Generally higher due to the open market nature.
    - **Visibility:** Listed in the game's marketplace or stud farm, where players can browse and select Stallions based
      on their needs.
    - **Example:** A high-quality G2 Stallion listed publicly for a fee of 200 UOS.

2. **Private Offers:**
    - **Accessibility:** Restricted to specific players, usually based on invitations or agreements between players.
    - **Pricing:** Can be negotiated between the parties involved, often lower than public offers due to the private
      nature.
    - **Visibility:** Not listed publicly; players must communicate directly to arrange the breeding.
    - **Example:** A G3 Stallion offered privately to a friend or alliance member for a negotiated fee of 150 UOS.

## Offspring Generation

The offspring generation process in MetaHoof is a critical aspect of the breeding system, ensuring that each new horse
inherits traits from its parents while maintaining genetic diversity. This section details the process of creating
offspring, the time required for generation, and how traits and attributes are determined.

### Process of Creating Offspring

The process of creating offspring in MetaHoof involves several steps, from selecting parent horses to the final
generation of the new horse. Here’s a detailed look at each step:

1. **Select Parent Horses:**
    - Players choose a Mare from their stable and a Stallion from available studs. The chosen horses must meet
      eligibility criteria (e.g., not directly related, appropriate generation).

2. **Acquire Breeding License:**
    - Players must acquire a breeding license from the Breed License Factory. The license can be purchased or earned
      through in-game activities.

3. **Pay Breeding Fee:**
    - The appropriate breeding fee, based on the Stallion's breed and generation, is deducted. If using another player’s
      Stallion, a stud fee must also be paid.

4. **Confirm Breeding Request:**
    - Players confirm the breeding request, initiating the process.

5. **Breeding Cooldown:**
    - Both parent horses enter a cooldown period, preventing them from breeding again immediately.

6. **Offspring Generation:**
    - The system calculates the offspring's traits and generates the new horse. This process involves averaging the
      parents' traits and applying a small variation.

7. **Notification:**
    - Players are notified once the new horse is generated and added to their stable.

### Time Required for Generation

The time required to generate offspring in MetaHoof ensures a balanced pace of gameplay and adds anticipation to the
breeding process. The generation time includes both the processing time and the cooldown periods for the parent horses:

1. **Processing Time:**
    - The actual calculation and generation of the offspring’s traits take a short amount of time (e.g., a few minutes
      to a couple of hours).

2. **Breeding Cooldown Period:**
    - After the breeding request is confirmed, the parent horses enter a cooldown period that prevents immediate
      subsequent breeding.
    - Example: G1 horse may have a breeding cooldown of 7 days, while a G3 horse may have a breeding cooldown of 10
      days.

The combined time ensures that players cannot breed horses too rapidly, maintaining the game’s balance and economic
stability.

### Traits and Attributes Determination

Determining the traits and attributes of the offspring is a crucial part of the breeding process. The offspring inherit
a mix of traits from their parents, with some variability to ensure genetic diversity. Here’s how this is done:

1. **Trait Averaging:**
    - Each trait of the offspring is calculated by averaging the corresponding traits of the parent horses.
    - Formula:
      $$ \[ T_{\text{offspring}} = \frac{T_{\text{parent1}} + T_{\text{parent2}}}{2} \] $$
    - Example: If Parent A has a speed of 8 and Parent B has a speed of 6, the offspring’s speed would be 7.

2. **Genetic Variation:**
    - A small variation (±10%) is applied to the averaged trait to introduce uniqueness and prevent traits from
      becoming too uniform.
    - Formula:
      $$ \[ T_{\text{offspring}} = \left( \frac{T_{\text{parent1}} + T_{\text{parent2}}}{2} \right) \times (1 +
      \text{Rand}(-0.1, 0.1)) \] $$
    - Example: With a variation of +3%, the speed would be adjusted to 7.21, which might be rounded to 7 based on round
      half up rule.

3. **Generation Influence:**
    - The offspring’s generation is one level higher than the higher generation parent.
    - Example: G1 Stallion + G2 Mare = G3 Offspring.

4. **Ensuring Boundaries:**
    - Traits are constrained within the 1-10 scale, ensuring they remain within acceptable limits.
    - Formula:
      $$ \[ T_{\text{offspring}} = \text{max}(1, \text{min}(10, T_{\text{offspring}})) \] $$

5. **Special Attributes and Mutations:**
    - Occasionally, special attributes or mutations may be introduced to add unique traits to the offspring, keeping the
      game dynamic and engaging.

### Example Scenario

1. **Parent Horses:**
    - G2 Stallion with Speed 8, Stamina 7
    - G1 Mare with Speed 6, Stamina 9

2. **Trait Calculation:**

**Speed:**

$$
\ \left( \frac{8 + 6}{2} \right) \times (1 + 0.03) = 7 \times 1.03 = 7.21 \
$$

**Stamina:**
$$
\left( \frac{7 + 9}{2} \right) \times (1 - 0.02) = 8 \times 0.98 = 7.84
$$

3. **Final Traits (after rounding and ensuring boundaries):**
    - Speed: 7
    - Stamina: 8

4. **Generation:**
    - Offspring will be G3.

5. **Time Required:**
    - Processing Time: 2 hours
    - Breeding Cooldown: 10 days for the Stallion, 7 days for the Mare.

The offspring generation process in MetaHoof is designed to ensure a balanced and dynamic breeding system. By averaging
parent traits, introducing genetic variations, and maintaining proper cooldown periods, the system fosters genetic
diversity and strategic gameplay. The inclusion of breeding licenses and controlled generation times ensures the game's
economic stability and enhances the overall player experience.