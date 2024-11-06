# Racehorse Traits <!-- {docsify-ignore-all} -->

Understanding the fundamental traits of Genesis and Offspring Horses is essential before delving into class systems and
races. These traits define each horse's initial characteristics and influence their performance and progression
throughout the game. Based on
the [Uniq Metadata](https://developers.ultra.io/tutorials/uniq-factories/uniq-variants/#uniq-factory-metadata) Standard
model, the traits include:

## Bloodline

Represents the horse's lineage and can impact its inherent abilities and genetic potential. Bloodline traits can
affect offspring attributes and performance.

- **Mirage Arabians:** Mirage Arabians are characterized by their agility and refined elegance. With a mysterious and
  graceful temperament, they excel in both speed and endurance, making them ideal for races that require both stamina
  and strategy. Their adaptability to desert-like conditions adds to their uniqueness.
- **Mystic Fjord:** This bloodline is recognized for high intelligence and resilience, producing horses with strategic
  minds and an intuitive racing style. Mystic Fjords are known for their stamina and adaptability, often excelling in
  races that require cunning and endurance, especially under challenging conditions.
- **Sakura:** Hailing from Asiatic lineage, Sakura horses combine agility and grace, with an affinity for quick
  movements and sharp turns. Their serene temperament hides their fierce determination, excelling in technical races
  where precision and timing are key.
- **Tempest Mustang:** With unmatched raw power and a fierce, untamed nature, Tempest Mustangs are the embodiment of
  high-risk, high-reward racing. Their wild temperament makes them formidable in high-stakes races, where their
  explosive strength and daring spirit lead them to victory in tough and unpredictable conditions.

---

## Breed Type

Defines the breed of the horse, influencing its advantages or limitations in various race types and conditions.
Each breed type has unique attributes contributing to racing performance.

- **Purebred:** Horses with a single breed lineage, known for their consistency and specialized traits.
- **Crossbreed:** A mix of two or more different breeds, offering a blend of traits from both, potentially creating
  versatile and adaptable horses.
- **Legendary Breed:** Exceptionally rare breeds with exclusive traits.

---

## Gender

Determines the horse's gender, which can impact breeding possibilities and certain game mechanics. Gender can
influence the genetic traits passed to offspring.

- **Filly:** Female horse before it reaches breeding age. Generally, young fillies are in a growth phase and cannot
  breed.
- **Colt:** Male horse before it reaches breeding age. Young colts are also in a growth phase and cannot breed.
- **Mare:** Mature female horse capable of breeding. Mares are used for reproduction and can participate in races.
- **Stallion:** Mature male horse capable of breeding. Stallions are used for reproduction and can participate in
  races.
- **Gelding:** A castrated male horse that cannot breed. Geldings are often used for racing due to their stable
  temperament and performance consistency.

---

## Coat

The **Coat** trait represents the visual style and texture of the horse’s exterior, with each bloodline having specific
coat types that are unique to their lineage. The **Coat** provides the foundational appearance of the horse and is
paired with **Color** to give each horse a unique look.

Below are the **Coat Types** for each bloodline:

| Bloodline       | Regular | Blue Roan | Buckskin | Cremello | Light Gray | Palomino | Smoky Black | Tobiano | White Splash |
|-----------------|---------|-----------|----------|----------|------------|----------|-------------|---------|--------------|
| Tempest Mustang | X       |           |          |          |            | X        | X           |         | X            |
| Sakura          | X       |           |          | X        | X          |          |             | X       |              |
| Mirage Arabians | X       |           | X        | X        |            |          |             | X       |              |
| Mystic Fjord    | X       | X         |          |          |            | X        |             |         | X            |

Here is the redefined **Color** section, now split into two parts: **Coat Color** and **Tail & Mane Color**. This will
give more distinction and depth to the MetaHoof horse appearance customization.

---

## Coat Color

The **Coat Color** trait enhances the visual appearance of each horse, adding depth and personality. Each bloodline has
its own signature coat color sets, with common and rare variants that make the horses stand out within their lineage.

| **Bloodline**       | **Common Coat Colors**                                             | **Rare Coat Colors**          |
|---------------------|--------------------------------------------------------------------|-------------------------------|
| **Mirage Arabians** | Buckskin, Golden Brown, Desert Sand, Cream, Mahogany, Palomino     | Amber Gold, Dust Storm        |
| **Mystic Fjord**    | Blue Roan, Icy White, Frost Gray, Glacier Silver, Pale Blue        | Crystal Ice, Northern Lights  |
| **Sakura Stallion** | Light Gray, White, Chestnut, Ash Gray, Silver                      | Cherry Blossom Pink, Ivory    |
| **Tempest Mustang** | Stormy Gray, Regular Brown, Thunder Black, Cloud White, Slate Gray | Tempest Silver, Electric Blue |

---

## Tail & Mane Color

The **Tail & Mane Color** trait further complements the coat color, adding another layer of customization. Each
bloodline's tail and mane colors are inspired by their environment and culture, enhancing their overall appearance.

| **Bloodline**       | **Tail & Mane Colors**                              |
|---------------------|-----------------------------------------------------|
| **Mirage Arabians** | Golden Brown, Mahogany, Desert Sand, Cream          |
| **Mystic Fjord**    | Icy White, Frost Gray, Glacier Silver, Pale Blue    |
| **Sakura Stallion** | Ash Gray, Silver, Light Gray                        |
| **Tempest Mustang** | Stormy Gray, Thunder Black, Cloud White, Slate Gray |

---

## Initial Class Level

Defines the horse's starting class, which determines its competitiveness in various races. This level is set at
minting and cannot be downgraded, affecting the horse's eligibility for different race types.

- **Class E (Novice):** Horses in this class start with basic abilities and attributes. They are ideal for new players
  who are learning the game mechanics and are beginning their journey. Novice horses are suited for introductory races
  and will have room for significant development.
- **Class D (Beginner):** These horses have progressed beyond Novice level and exhibit some potential in races. They are
  suitable for players who have gained a basic understanding of the game and are ready to compete in more challenging
  races. Beginner horses have slightly enhanced attributes compared to Novice horses.
- **Class C (Intermediate):** Intermediate horses possess a decent track record and enhanced attributes. They are
  well-suited for players who have gained experience and are looking to compete in mid-level races. Horses in this class
  offer a balance of performance and potential for further improvement.
- **Class B (Advanced):** Advanced horses are competent racers with consistently strong performance in challenging
  races. Players who seek more competitive and demanding races will find these horses ideal. Advanced horses have
  refined attributes and are capable of handling more complex race scenarios.
- **Class A (Expert):** Expert horses represent the top tier of racing with exceptional attributes and capabilities.
  These horses are designed for the most prestigious and high-stakes races. Players aiming for elite competitions will
  benefit from the superior performance and attributes of Class A horses.

## Initial XP Level

Represents the starting experience points of the horse, impacting its initial readiness for races and ability to gain
further XP through racing and other activities.

## Generation

Indicates the horse’s position in the genetic lineage. Higher generations might have refined traits or special
abilities inherited from previous generations, enhancing their racing capabilities.

## Performance Longevity

Represents the number of races or time units a horse can perform at its optimal level before experiencing performance
decay. This trait determines how long a horse can maintain its peak performance.

- High Longevity: A higher numerical value indicating that the horse can compete effectively in many races before
  performance begins to decline. For example, a horse with a longevity of 100 races will retain its optimal performance
  for a longer period.
- Medium Longevity: A moderate numerical value suggesting a balanced performance duration. For instance, a horse with a
  longevity of 50 races will maintain its peak performance for a reasonable number of races before decay starts.
- Low Longevity: A lower numerical value indicating a shorter period of optimal performance. For example, a horse with a
  longevity of 20 races will experience performance decline relatively quickly.

## Performance Attributes

Each horse’s performance and breeding potential is determined by a visible set of genetic traits.
Unlike a hidden or encoded system, these traits are fully transparent, allowing players to easily understand and
strategize based on their horse’s strengths and weaknesses. The following attributes are the primary factors that shape
a horse's capabilities on the track and in breeding.

### Primary Performance Traits:

- **Speed**: This trait determines the horse's top speed during a race. Horses with higher speed will naturally achieve
  better results in sprint races and any scenario where maximum velocity is critical.

- **Endurance**: Endurance reflects how well a horse can maintain its speed over longer distances. Horses with high
  endurance are particularly suited for marathon races and formats that test stamina over extended periods.

- **Agility**: Agility defines how quickly and smoothly a horse can navigate turns and adjust its pace. High agility
  makes a horse better at handling tracks with sharp curves and unpredictable race conditions.

- **Temperament**: A horse’s temperament influences its behavior under race conditions, particularly in high-stress
  environments. A calm horse is more likely to remain focused and perform consistently, whereas a more excitable horse
  may be unpredictable but show bursts of extraordinary performance.

- **Stamina**: Stamina relates to the horse's recovery rate after a race. Horses with high stamina will recover quicker,
  allowing them to compete in multiple races with minimal downtime between events.

- **Breeding Potential**: This attribute measures how likely a horse is to pass on its desirable traits to its
  offspring. Horses with high breeding potential are key assets for breeding programs, as they increase the chances of
  producing high-performing progeny.

### Track-Specific Adaptability:

Every horse has different levels of adaptability to various racing surfaces. This adaptability plays a crucial role in
performance depending on the race track’s surface type.

- **Dirt Track**: Dirt track adaptability indicates how well a horse performs on natural, uneven dirt surfaces. Horses
  with high dirt track adaptability excel on rugged terrains that require both speed and agility.

- **Grass Track**: Horses with high grass track adaptability are best suited for racing on softer, grassy surfaces.
  These tracks typically require more endurance and agility to navigate efficiently.

- **Synthetic Track**: Synthetic track adaptability measures how well a horse performs on artificial racing surfaces,
  where conditions are consistent. Horses with higher synthetic track adaptability often perform more reliably on these
  tracks, making them ideal for competitive, controlled environments.
