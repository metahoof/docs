# Racehorse Traits <!-- {docsify-ignore-all} -->

Understanding the fundamental traits of Genesis and Offspring Horses is essential before delving into class systems and
races. These traits define each horse's initial characteristics and influence their performance and progression
throughout the game. Based on
the [Uniq Metadata](https://developers.ultra.io/tutorials/uniq-factories/uniq-variants/#uniq-factory-metadata) Standard
model, the traits include:

## Bloodline

Represents the horse's lineage and can impact its inherent abilities and genetic potential. Bloodline traits can
affect offspring attributes and performance.

- **Elysian Thoroughbred:** Known for high speed and moderate endurance, this lineage often produces horses with a
  competitive temperament and impressive acceleration.
- **Shadowmere:** Features high agility and a stealthy nature, making these horses adept at navigating challenging
  race conditions with a mysterious temperament.
- **Aurora Charger:** This bloodline is characterized by high stamina and a dazzling appearance. Horses from this
  lineage have a gentle temperament and excel in endurance races.
- **Tempest Mustang:** High power and a wild nature define this lineage, resulting in horses with a fierce
  temperament that perform well in high-stakes races.
- **Ametista:** Renowned for high agility and stamina, these horses have a serene temperament, ideal for
  both sprint and endurance races.
- **Inferno Stallion:** Combining high speed with endurance, horses from this bloodline exhibit a fiery temperament
  and excel in competitive racing scenarios.
- **Mystic Fjord:** With high stamina and intelligence, this lineage produces curious and perceptive horses, often
  excelling in strategic races.
- **Phoenix Steed:** Known for quick recovery and resilience, these horses have a unique rebirth ability and a
  strong, adaptable temperament.

## Breed Type

Defines the breed of the horse, influencing its advantages or limitations in various race types and conditions.
Each breed type has unique attributes contributing to racing performance.

- **Purebred:** Horses with a single breed lineage, known for their consistency and specialized traits.
- **Crossbreed:** A mix of two different breeds, offering a blend of traits from both, potentially creating
  versatile and adaptable horses.
- **Hybrid:** Combining features from multiple breeds, hybrids may exhibit rare and unique abilities.
- **Rarebreed:** Unique breeds with limited availability, often featuring special traits and higher performance
  potential.
- **Legendary Breed:** Exceptionally rare breeds with extraordinary attributes and abilities, offering a significant
  advantage in races.

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

## Coat

**Appearance:** Includes color, markings, and patterns. While primarily cosmetic, coat traits can subtly influence the
horse's visibility and appeal, impacting their presence in races and the marketplace.

Each breed type may have its own set of base colors that are common for that breed. Through breeding, these base colors
can combine to create unique and rare colors, adding an extra layer of customization and rarity.

**Base and Special Colors by Breed Type:**

| Bloodline            | Base Coat Colors                                                                                | Tail and Mane Colors                                                                                      | Rare Colors                         |
| -------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Elysian Thoroughbred | Chestnut, Bay, Black, Palomino, Grey, Sorrel, Liver Chestnut, Dun                               | Ebony Chestnut, Midnight Bay, Golden Palomino, Silver Grey, Ash Brown, Copper Sorrel, Mahogany, Amber Dun | Sapphire Blue, Emerald Green        |
| Shadowmere           | Dark Grey, Black, Midnight Blue, Coal, Onyx, Ebony, Charcoal, Slate                             | Obsidian, Nightshade, Midnight Black, Dark Sapphire, Shadow Grey, Iron Coal, Deep Onyx, Smoky Charcoal    | Blood Red, Moonlit Silver           |
| Aurora Charger       | White, Silver, Pearl, Cream, Light Gold, Champagne, Snow, Ivory                                 | Moonlight, Star Silver, Frost White, Dawn Gold, Silver Mist, Champagne Glow, Snowy White, Ivory Light     | Celestial Blue, Radiant Gold        |
| Tempest Mustang      | Red Roan, Dun, Buckskin, Sorrel, Bay Roan, Grulla, Claybank, Apricot                            | Ember, Flame, Fiery Red, Blaze Brown, Sunburst, Grulla Grey, Claybank Gold, Apricot Cream                 | Electric Blue, Lightning Yellow     |
| Inferno Stallion     | Crimson, Charcoal, Fire Orange, Copper, Rust, Burnt Umber, Scarlet, Molten Lava                 | Blaze, Ash, Ember Glow, Smoky Copper, Charred Rust, Umber Ash, Scarlet Flame, Lava Flow                   | Dragon Scale Green, Inferno Gold    |
| Mystic Fjord         | Silver Dapple, Frost, Ice Blue, Light Grey, Pale Blue, Moonlit White, Misty Blue, Arctic Silver | Glacier, Frostbite, Winter Blue, Ice Shimmer, Arctic White, Moonlit Shine, Misty Frost, Silver Glacier    | Northern Lights Green, Frozen Teal  |
| Phoenix Steed        | Gold, Copper, Burnt Sienna, Amber, Bronze, Marigold, Fiery Red, Sunset Orange                   | Phoenix Flame, Ember Glow, Sunfire, Golden Bronze, Amber Blaze, Marigold Shine, Fiery Glow, Sunset Flame  | Radiant Crimson, Solar Flare Yellow |
| Ametista             | Amethyst, Violet, Lavender, Lilac, Deep Purple, Orchid, Plum, Grape                             | Purple Haze, Lilac, Royal Amethyst, Lavender Glow, Deep Violet, Orchid Bloom, Plum Shine, Grape Mist      | Mystic Pink, Ethereal White         |

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

## Genetic Sequence

A unique identifier of the horse’s genetic makeup, influencing its attributes and performance. This sequence also
determines the genetic traits passed to offspring.

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
