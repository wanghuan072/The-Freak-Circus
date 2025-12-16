export const wiki = [
    {
        "id": 1,
        "title": "Controls & Keybindings",
        "description": "Comprehensive list of default keybindings for movement, combat, social, and miscellaneous actions in VEIN Game. Learn how to edit and customize your controls.",
        "imageUrl": "/images/wiki/wiki-01.webp",
        "imageAlt": "Image showing the default keybindings table for VEIN Game controls.",
        "publishDate": "2025-11-19",
        "addressBar": "/controls",
        "seo": {
            "title": "VEIN Game Controls | Default Keybindings, Movement, Combat - veingame.net",
            "description": "Complete reference for all default keybindings in VEIN Game, including Movement, Combat, Vehicles, and Inventory Quick Moves. Easily find and customize your controls.",
            "keywords": "VEIN controls, VEIN keybindings, default keys, movement controls, combat controls, vehicle controls, customize controls, VEIN quick move"
        },
        "detailsHtml": `
        <h2>Default Keybindings</h2>
        <p>These are editable under the Bindings submenu of the Option menu. After mastering the controls, learn about <a href="/vein-wiki/skills" class="inline-link">skills and perks</a> to optimize your character build.</p>

        <h3>Movement</h3>
        <ul>
            <li>Move Forward: W</li>
            <li>Move Backward: S</li>
            <li>Move Left: A</li>
            <li>Move Right: D</li>
            <li>Crouch: Left CTRL</li>
            <li>Free Look: T</li>
            <li>Jump: Space Bar</li>
            <li>Move Down: Left CTRL</li>
            <li>Move Up: Space Bar</li>
            <li>Sprint: Left Shift</li>
            <li>Third Person: Middle Mouse Button</li>
            <li>Use: E</li>
        </ul>

        <h3>Combat</h3>
        <ul>
            <li>Primary: Left Mouse Button</li>
            <li>Secondary: Right Mouse Button</li>
            <li>Check Ammo: N</li>
            <li>Reload: R</li>
        </ul>

        <h3>Social</h3>
        <ul>
            <li>Chat: Y</li>
            <li>Emote: K</li>
            <li>Scoreboard: F1</li>
            <li>VOIP: V</li>
        </ul>

        <h3>Vehicles</h3>
            <ul>
            <li>Handbrake: Space Bar</li>
            <li>Vehicle Ascend: Space Bar</li>
            <li>Vehicle Descend: Left CTRL</li>
            <li>Vehicle Horn: H</li>
            <li>Vehicle Reverse / Brake: S</li>
            <li>Vehicle Throttle: W</li>
            <li>Vehicle Turn Left: A</li>
            <li>Vehicle Turn Right: D</li>
        </ul>

        <h3>Miscellaneous</h3>
        <ul>
            <li>Admin Menu: Backslash</li>
            <li>Construction Menu: B</li>
            <li>Escape: Escape</li>
            <li>Flashlight: F</li>
            <li>Inventory: I</li>
            <li>Map: M</li>
            <li>Quick Menu: Q</li>
            <li>Quickload: F8</li>
            <li>Quicksave: F5</li>
            <li>Take All Items: H</li>
        </ul>

        <h3>Other Keybinds</h3>
        <p>Left Shift + Left Click quick moves items between inventory and containers.</p>
    `
    },

    {
        "id": 2,
        "title": "Skills & Perks",
        "description": "A complete guide to all available skills in VEIN Game, detailing their effects and listing every associated perk, including level requirements and benefits.",
        "imageUrl": "/images/wiki/wiki-02.webp",
        "imageAlt": "Image displaying the skills and associated perks tree in VEIN Game.",
        "publishDate": "2025-11-19",
        "addressBar": "/skills",
        "seo": {
            "title": "VEIN Game Skills Guide | All Perks, Levels, and Skill Trees - veingame.net",
            "description": "Detailed guide to every skill in VEIN Game (Agility, Crafting, Medical, Weapon Handling, etc.). Find full perk lists, level requirements, and skill effects.",
            "keywords": "VEIN skills, VEIN perks, skill tree, agility perks, crafting perks, weapon handling skill, level requirements, VEIN character build"
        },
        "detailsHtml": `
      <h2>Skills and Perks Overview</h2>
      <p>This section details all core skills in VEIN Game, the function of the skill, and the associated perks available at various levels (LVL). Make sure you know the <a href="/vein-wiki/controls" class="inline-link">controls</a> before diving into skill strategies. For practical skill selection tips, see our <a href="/vein-guides/day-1-Skill-Selection-Ultimate-Guide" class="inline-link">skill selection guide</a>.</p>

      <h3>Agility</h3>
      <p>Your stamina and aerobic fitness.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Sprinter</strong> (LVL 25): You get 30% less tired while sprinting.</li>
          <li><strong>Acrobat</strong> (LVL 25): 50% less tiredness from jumping.</li>
          <li><strong>Unstoppable</strong> (LVL 25): Continuing to sprint while 100% tired no longer causes pain.</li>
      </ul>

      <h3>Construction</h3>
      <p>Your ability to build structures.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Sawmill Operator</strong>: Cost of crafting reinforced wood fortifications is reduced by 25%.</li>
      </ul>

      <h3>Cooking</h3>
      <p>Your strength in the kitchen.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Lazy Chef</strong> (LVL 25): Eating raw ingredients, such as sugar or flour, satisfy your hunger 25% more.</li>
      </ul>

      <h3>Crafting</h3>
      <p>Your creativity when combining unrelated items.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Detail Oriented</strong> (LVL 25): All schematics, regardless of what skill it's for, give 25% more XP when read.</li>
          <li><strong>Home Sweet Home</strong> (LVL 25): As your nearby Utility Cabinet becomes more full, your stress decreases.</li>
          <li><strong>Improvisor</strong> (LVL 25): All Standard Workbench recipes are 50% cheaper to craft.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Innovator</strong> (LVL 50): All schematics, regardless of what skill it's for, have their stat level requirement reduced by 5.</li>
          <li><strong>Cost Cutter</strong> (LVL 50): Can use a cutting tool with the tier below the recipe's stated requirement. (If the recipe normally requires heavy cutting, basic cutting can be used instead, etc.)</li>
          <li><strong>Well Read</strong> (LVL 50): Skill books give one extra stat level.</li>
          <li><strong>Phantom Builder</strong> (LVL 50): When crafting an item, you have a rare chance that you won't use your ingredients.</li>
          <li><strong>Quantum Crafting</strong> (LVL 50): You have a 15% chance of recieving double the amount of items when crafting.</li>
      </ul>

      <h3>Dismantling</h3>
      <p>Your ability to take things apart.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Paper Shredder</strong> (LVL 25): Removes the Basic Cutting tool requirement for furniture that requires it.</li>
          <li><strong>Perses' Assistant</strong> (LVL 25): When dismantling, have a 1/4 chance to receive 25% more yield than you normally would.</li>
      </ul>

      <h3>Driving</h3>
      <p>Your ability to operate vehicles.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Adrenaline Junkie</strong> (LVL 25): Driving fast reduces stress.</li>
      </ul>

      <h3>Electrical</h3>
      <p>Your knowledge in electrical wiring.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
      </ul>

      <h3>Farming</h3>
      <p>Your ability to plant, grow and raise crops.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Green Thumb</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Circle of Life</strong> (LVL 25): Discarding a growing plant gives you a 50% chance of recovering its seed.</li>
          <li><strong>Dirt Expert</strong> (LVL 25): You can see how long it will take a compost bin to create soil as well as the quality of soil it will yield.</li>
          <li><strong>Lifebringer</strong> (LVL 50): Dead plants continue to grow very slowly.</li>
      </ul>

      <h3>Lockpicking</h3>
      <p>Your ability to break into locked doors or containers.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Alarmist</strong> (LVL 25): Lockpicking a door connected to a door alarm has a high chance to not trigger the alarm.</li>
      </ul>

      <h3>Mechanical</h3>
      <p>Your knowledge about moving parts.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Well Read</strong> (LVL 50): Skill books give one extra stat level.</li>
      </ul>

      <h3>Medical</h3>
      <p>Your capacity to treat injury and illness.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Diagnostican</strong> (LVL 25): Get the ability to see other players' approximate health.</li>
          <li><strong>Memento Mori</strong> (LVL 25): You can inspect a corpse and see how it died.</li>
          <li><strong>Master Palpator</strong> (LVL 50): Get the ability to see other players' exact health.</li>
          <li><strong>Well Read</strong> (LVL 50): Skill books give one extra stat level.</li>
      </ul>

      <h3>Repair</h3>
      <p>Your ability to fix mechanical issues.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Thread Expert</strong> (LVL 25): Clothing you're wearing degrades 25% slower.</li>
          <li><strong>Weapons Expert</strong> (LVL 25): Weapons you're using degrade 25% slower.</li>
      </ul>

      <h3>Scavenging</h3>
      <p>Your eye for valuable resources.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Quick Searcher</strong> (LVL 25): Search containers instantly.</li>
      </ul>

      <h3>Sneaking</h3>
      <p>Your ability to be silent.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Dead Approach</strong> (LVL 25): Zombie alert distance decreased by 50%.</li>
          <li><strong>Tiptoed</strong> (LVL 25): The chances of causing floor creaks are reduced by 50%.</li>
      </ul>

      <h3>Sociability</h3>
      <p>How well you master communication.</p>
      <h3>Strength</h3>
      <p>Your weight lifting capacity, melee damage, and knockback chance.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Big Back</strong> (LVL 25): Gain 50lbs/22.7kg of carry weight.</li>
      </ul>

      <h3>Throwing</h3>
      <p>Your performance hitting targets with objects.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Catcher</strong> (LVL 25): There is a rare chance that if you get hit by an item, it goes into your inventory.</li>
          <li><strong>Special Delivery</strong> (LVL 25): Throwing large items (like printers) at someone's head deals 150% consciousness damage.</li>
          <li><strong>Windup</strong> (LVL 25): You can charge your throws.</li>
      </ul>

      <h3>Trading</h3>
      <p>Your persuasion towards getting good deals.</p>
      <h3>Vitality</h3>
      <p>Your resistance to injury.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Clean Skin</strong> (LVL 25): The chance of dirty bandages becoming infected is reduced 25%.</li>
          <li><strong>Compromised Savant</strong> (LVL 25): Your chances of getting sick are tripled, and the effects are stronger, but you get a 5% XP bonus in every skill.</li>
          <li><strong>Healthy</strong> (LVL 25): Your max health is increased by 25%.</li>
          <li><strong>Steel Limbs</strong> (LVL 25): 50% less likely to break your arms or legs.</li>
      </ul>

      <h3>Weapon Handling</h3>
      <p>Your ability to operate firearms.</p>
      <h4>Perks:</h4>
      <ul>
          <li><strong>Bank It</strong> (LVL 25-50): You gain an additional perk point upon hitting level 100.</li>
          <li><strong>Muscle Memory</strong> (LVL 25): XP gained by related skill tasks is increased by 25%.</li>
          <li><strong>Fast Ejecter</strong> (LVL 25): You can reload magazines 1.3x as fast.</li>
          <li><strong>Quick Loader</strong> (LVL 25): You can load 3 bullets at a time into a firearm magazine.</li>
      </ul>
  `
    },

    {
        "id": 3,
        "title": "Mechanics",
        "description": "An exhaustive guide covering all core gameplay mechanics in VEIN Game, including detailed sections on Crafting, Building, Vehicles, Item Interactions, and World Systems.",
        "imageUrl": "/images/wiki/wiki-03.webp",
        "imageAlt": "Image symbolizing the core systems and mechanics of VEIN Game.",
        "publishDate": "2025-11-19",
        "addressBar": "/mechanics",
        "seo": {
            "title": "VEIN Game Mechanics | Crafting, Vehicle Interaction, and World Systems Guide - veingame.net",
            "description": "Learn the inner workings of VEIN Game. Detailed explanations of Crafting, Building, Cooking, Item Stats, Vehicle Use, and comprehensive World Systems like Electricity and Time.",
            "keywords": "VEIN mechanics, crafting mechanics, building mechanics, vehicle interaction, item stats, VEIN world systems, electricity mechanics, VEIN health system, time cycle"
        },
        "detailsHtml": `
      <h2>Core Game Mechanics</h2>
      <p>This section provides a detailed breakdown of all fundamental systems and interactive mechanics within VEIN Game, from item use to world systems. For detailed building mechanics, see the <a href="/vein-wiki/building" class="inline-link">building system</a>. Learn about vehicle mechanics in our <a href="/vein-wiki/vehicles" class="inline-link">vehicles guide</a>. When you need mid-to-late game metals for Steel, plan ore runs using the <a href="/vein-guides/vein-game-rook-cavern-guide" class="inline-link">Rook Cavern mining guide</a>.</p>

      <h3>Crafting & Survival</h3>
      <ul>
          <li>Crafting</li>
          <li>Building</li>
          <li>Cooking Recipes</li>
          <li>Growing (Farming)</li>
      </ul>

      <h3>Interact: Doors and Movement</h3>
      <ul>
          <li>Open / Close</li>
          <li>Lock / Unlock</li>
          <li>Knock</li>
          <li>Destroy</li>
          <li>Wash Self</li>
      </ul>

      <h3>Vehicles</h3>
      <p>Mechanics for interacting with and operating all in-game vehicles:</p>
      <ul>
          <li>Check</li>
          <li>Enter / Exit</li>
          <li>Flip</li>
          <li>Hotwire</li>
          <li>Install / Uninstall (Parts)</li>
          <li>Lock / Unlock</li>
          <li>Open / Close (Hood, Back or Bed)</li>
          <li>Push</li>
          <li>Turn on / off</li>
      </ul>

      <h3>Items: Fluid Items</h3>
      <p>Specific interactions possible with fluid containers and liquids:</p>
      <ul>
          <li>Check</li>
          <li>Siphon</li>
          <li>Pour / Fill</li>
          <li>Drink</li>
          <li>Empty</li>
          <li>Smell</li>
          <li>Label</li>
          <li>Drop</li>
      </ul>

      <h3>Items: Non-Fluid Items</h3>
      <p>General interactions applicable to solid items and equipment:</p>
      <ul>
          <li>Destroy</li>
          <li>Dismantle</li>
          <li>Drop</li>
          <li>Eat</li>
          <li>Grab</li>
          <li>Hold</li>
          <li>Ignite</li>
          <li>Install / Uninstall</li>
          <li>Label</li>
          <li>Move</li>
          <li>Place</li>
          <li>Read</li>
          <li>Repair</li>
          <li>Smell</li>
          <li>Throw</li>
          <li>Wash</li>
      </ul>
      
      <h3>Item Stats</h3>
      <p>Key statistics and states tracked for various in-game items:</p>
      <ul>
          <li>Capacity</li>
          <li>Condition</li>
          <li>Dirtiness</li>
          <li>Equipped / Put away</li>
          <li>Heat</li>
          <li>Turn on / off</li>
          <li>Wetness</li>
      </ul>

      <h3>Health & Character State</h3>
      <p>Core character status systems:</p>
      <ul>
          <li>Health</li>
          <li>Physical State</li>
          <li>Mental State</li>
      </ul>

      <h3>World Systems</h3>
      <p>Environmental and persistent mechanics that affect gameplay:</p>
      <ul>
          <li>AI</li>
          <li>Clean (System)</li>
          <li>Day / Night Cycle</li>
          <li>Destroy (World objects)</li>
          <li>Dismantle (World objects)</li>
          <li>Electricity</li>
          <li>Fishing</li>
          <li>Items (World spawning/persistence)</li>
          <li>Radiation</li>
          <li>Search (Containers/World)</li>
          <li>Time</li>
          <li>Temperature</li>
          <li>Weather</li>
      </ul>
  `
    },

    {
        "id": 4,
        "title": "Cooking Recipes",
        "description": "The complete database for all Brewing and Slicing recipes in VEIN Game. Find every ingredient and required cooking utensil to satisfy your hunger and thirst.",
        "imageUrl": "/images/wiki/wiki-04.webp",
        "imageAlt": "Image showing various cooked food items and ingredients in VEIN Game.",
        "publishDate": "2025-11-19",
        "addressBar": "/cooking-recipes",
        "seo": {
            "title": "VEIN Cooking Recipes | Brewing, Slicing, Ingredients, and Utensils - veingame.net",
            "description": "Full list of all cooking and slicing recipes in VEIN Game. Learn how to brew Broths, Coffee, and Tea, and find all required ingredients and cooking tools.",
            "keywords": "VEIN cooking recipes, VEIN brewing, cooking guide, slicing recipes, cooking ingredients, broth recipe, coffee recipe, cooking utensils"
        },
        "detailsHtml": `
      <h2>Cooking Recipes Guide</h2>
      <p>A comprehensive list of all crafting recipes related to food preparation, including brewing and slicing techniques. For more on crafting mechanics, see the <a href="/vein-wiki/mechanics" class="inline-link">mechanics wiki</a>. Find all cooking ingredients in our <a href="/vein-items" class="inline-link">items database</a>.</p>

      <h3>Brewing Recipes</h3>
      <p>Just one of these utensils is enough to craft the Brewing recipes: <strong>Pot, Pan, Oven Dish, Kettle.</strong></p>

      <table>
          <thead>
              <tr>
                  <th>Product</th>
                  <th>Ingredient #1</th>
                  <th>Ingredient #2</th>
                  <th>Liquid</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Boiled Water</td>
                  <td>Water</td>
                  <td>--</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>Broth</td>
                  <td>Vegetable Fat</td>
                  <td>Fresh Vegetables</td>
                  <td>Water</td>
              </tr>
              <tr>
                  <td>Broth</td>
                  <td>Fresh Meats</td>
                  <td>-</td>
                  <td>Water</td>
              </tr>
              <tr>
                  <td>Broth</td>
                  <td>Fish</td>
                  <td>-</td>
                  <td>Water</td>
              </tr>
              <tr>
                  <td>Broth</td>
                  <td>Bones</td>
                  <td>-</td>
                  <td>Water</td>
              </tr>
              <tr>
                  <td>Coffee</td>
                  <td>Coffee Bag</td>
                  <td>-</td>
                  <td>Water</td>
              </tr>
              <tr>
                  <td>Cooking Oil</td>
                  <td>Vegetable Fat</td>
                  <td>-</td>
                  <td>Water</td>
              </tr>
              <tr>
                  <td>Hot Chocolate</td>
                  <td>Hot Chocolate Box</td>
                  <td>-</td>
                  <td>Milk</td>
              </tr>
              <tr>
                  <td>Maple Syrup</td>
                  <td>Raw Syrup Sap</td>
                  <td>--</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>Tea</td>
                  <td>Tea Bag Box</td>
                  <td>-</td>
                  <td>Water</td>
              </tr>
          </tbody>
      </table>

      <h3>Slicing Recipes</h3>
      <p>All the slicing is done with a <strong>knife</strong>.</p>

      <table>
          <thead>
              <tr>
                  <th>Product</th>
                  <th>Ingredient #1</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Carve Jack-o'-Lantern</td>
                  <td>Pumpkin</td>
              </tr>
              <tr>
                  <td>Slice Apple</td>
                  <td>Apple</td>
              </tr>
              <tr>
                  <td>Slice Bread</td>
                  <td>Bread Loaf</td>
              </tr>
              <tr>
                  <td>Slice Bread</td>
                  <td>Sourdough</td>
              </tr>
              <tr>
                  <td>Slice Bread</td>
                  <td>Baguette</td>
              </tr>
              <tr>
                  <td>Slice Cantaloupe</td>
                  <td>Cantaloupe</td>
              </tr>
              <tr>
                  <td>Slice Carrot</td>
                  <td>Carrot</td>
              </tr>
              <tr>
                  <td>Slice Cucumber</td>
                  <td>Cucumber</td>
              </tr>
              <tr>
                  <td>Slice Lemon</td>
                  <td>Lemon</td>
              </tr>
              <tr>
                  <td>Slice Lime</td>
                  <td>Lime</td>
              </tr>
              <tr>
                  <td>Slice Pizza</td>
                  <td>Whole Pizza</td>
              </tr>
              <tr>
                  <td>Slice Tomato</td>
                  <td>Tomato</td>
              </tr>
              <tr>
                  <td>Slice Watermelon</td>
                  <td>Watermelon</td>
              </tr>
          </tbody>
      </table>
  `
    },

    {
        "id": 5,
        "title": "Building",
        "description": "Comprehensive guide to the Building system in VEIN Game. Details on the Construction Menu, Fortification tiers, Utility Cabinets, Workbenches, Storage, and Utilities.",
        "imageUrl": "/images/wiki/wiki-05.webp",
        "imageAlt": "Image displaying various constructed elements and fortifications in a VEIN base.",
        "publishDate": "2025-11-19",
        "addressBar": "/building",
        "seo": {
            "title": "VEIN Building Guide | Fortifications, Utility Cabinet, Crafting Stations - veingame.net",
            "description": "Master construction in VEIN Game. Learn about the Utility Cabinet base system, tier requirements (Wood, Scrap, Limestone), essential workbenches, and base utilities.",
            "keywords": "VEIN building, VEIN construction, utility cabinet, fortification tiers, crafting stations, workbenches, building utilities, base defense"
        },
        "detailsHtml": `
      <h2>Construction & Building System</h2>
      <p>Building is done with the Construction Menu, accessed in-game with <strong>B</strong>, which is broken down into eight categories. For help choosing where to build, check our <a href="/vein-guides/vein-best-base-location-survival-guide" class="inline-link">best base location guide</a>. Understand building mechanics in detail with the <a href="/vein-wiki/mechanics" class="inline-link">mechanics wiki</a>.</p>
      <p>Blueprints are listed under their respective tab and will show any stat requirements, materials and tools needed to construct it.</p>
      <p>You must have the materials and tools in your inventory to be able to build the item.</p>

      <h3>Utility Cabinets (UC)</h3>
      <p>This is the center of your base. It will automatically repair anything built within its area as long as you have provided the proper resources.</p>
      <p>Opening the UC will give you a list of required resources for structure maintenance within your base, and what materials are currently available. It will consume a certain number of them every 60 minutes to prevent decay. Any constructed item outside of the UCs range or without enough materials will decay over time.</p>
      <p>Opening the Manage menu on your Utility Cabinet will show you who has the ability to build, tear down or use resources within its range. It will also list built structures, available resources, and how many days, hours and minutes the UC has been up for.</p>
      <p><strong>Note on Multiplayer:</strong> If you are playing multiplayer, be sure to build the UC in a well guarded or hidden location. If anyone finds it, they can claim everything in your base.</p>

      <h3>Fortifications (Defense Tiers)</h3>
      <p>These crafted structures will protect your base against zombies and players. Looking at existing fortifications will snap new builds to them. Rolling mouse wheel will swivel your snapped fortification.</p>

      <h4>Tier 1 - Wood, Scrap</h4>
      <p>Wood scrap will break easily and can be damaged by everything.</p>

      <h4>Tier 2 - Wood, Fortified</h4>
      <p>Fortified wood is much stronger than wood scrap and is vulnerable to heavy melee weapons, firearms, explosions, etc. Requires <strong>Construction Skill Level 25</strong> to build.</p>

      <h4>Tier 3 - Limestone Brick</h4>
      <p>Limestone brick is vulnerable to explosives, large firearms, or pickaxes. Limestone bricks are made by smelting concrete paste, which is made from limestone powder. Requires <strong>Construction Skill Level 50</strong> to build.</p>

      <h3>Furniture</h3>
      <p>Items for base aesthetics, well-being, and skill leveling.</p>
      <ul>
          <li><strong>Decor:</strong> Some stuff to build.</li>
          <li><strong>Well Being:</strong> Matress</li>
          <li><strong>Lights:</strong> Candle</li>
          <li><strong>Skill Furniture:</strong> Basketball Net, Pull-up Bar, Shooting Target</li>
      </ul>

      <h3>Stations (Essential for Crafting and Surviving)</h3>
      <h4>Workbenches:</h4>
      <ul>
          <li>Standard Workbench</li>
          <li>Advanced Workbench</li>
          <li>Fabrication Workbench</li>
          <li>Repair Workbench</li>
          <li>Schematic Table</li>
      </ul>

      <h4>Refineries:</h4>
      <ul>
          <li>Makeshift Forge</li>
          <li>Makeshift Charcoal Kiln</li>
          <li>Advanced Charcoal Kiln</li>
      </ul>

      <h4>Cooking:</h4>
      <ul>
          <li>Campfire</li>
      </ul>

      <h3>Storage</h3>
      <p>Options for storing your items:</p>
      <ul>
          <li>Small Crate</li>
          <li>Large Crate</li>
          <li>Key Hook</li>
          <li>Scrap Storage</li>
          <li>Wood Log Storage</li>
          <li>Wooden Plank Storage</li>
      </ul>

      <h3>Utilities</h3>
      <p>Items that provide advantages to survive in harsh times, categorized by function:</p>
      
      <h4>Farming:</h4>
      <ul>
          <li>Flower Pot Var. 1, Var. 2</li>
          <li>Single Planter Var. 1</li>
          <li>Small Planter Var. 1, Var. 2</li>
          <li>Medium Planter Var. 1, Var. 2</li>
          <li>Large Planter Var. 1, Var. 2</li>
          <li>Compost Bin</li>
      </ul>

      <h4>Fluids:</h4>
      <ul>
          <li>Insulated Rain Collector</li>
          <li>Makeshift Sprinkler</li>
          <li>Rain Collector</li>
          <li>Well</li>
      </ul>

      <h4>Temperature Control:</h4>
      <ul>
          <li>Kerosene Heater</li>
          <li>Makeshift Freezer</li>
          <li>Makeshift Fridge</li>
      </ul>

      <h4>Electricity:</h4>
      <ul>
          <li>Battery Charger</li>
          <li>Makeshift Battery</li>
          <li>Gas Generator</li>
          <li>Makeshift Solar Panel</li>
          <li>Makeshift Windmill</li>
      </ul>

      <h4>Lights:</h4>
      <ul>
          <li>Floodlight</li>
          <li>Flourescent Light</li>
      </ul>

      <h4>Misc. Utilities:</h4>
      <ul>
          <li>Trash Can</li>
          <li>Weather Gauge</li>
      </ul>

      <h3>Defense</h3>
      <p>Basic defenses that may be effective against zombies:</p>
      <ul>
          <li>Fenced Barbed Wire</li>
      </ul>
  `
    },

    {
        "id": 6,
        "title": "Vehicles",
        "description": "The complete list of all vehicles in VEIN Game, categorized by type, including Public Safety, Passenger Cars, Trucks, Off-Road, and Human-powered vehicles.",
        "imageUrl": "/images/wiki/wiki-06.webp",
        "imageAlt": "Image showing various vehicle models available in VEIN Game.",
        "publishDate": "2025-11-19",
        "addressBar": "/vehicles",
        "seo": {
            "title": "VEIN Game Vehicles List | Cars, Trucks, Motorcycles, and Vehicle Materials Guide - veingame.net",
            "description": "Full database of all motorized and human-powered vehicles in VEIN. Find vehicle models, required gasoline, and how to use them for transport and storage.",
            "keywords": "VEIN vehicles, vehicle list, cars, trucks, motorcycles, gasoline, vehicle materials, transport, vehicle types, school bus"
        },
        "detailsHtml": `
      <h2>Vehicles and Transport</h2>
      <p>The vehicles in VEIN are tools that can be used for transport, storage or even more. Motorized vehicles need gasoline and functional vehicle materials to work properly. Learn vehicle controls in the <a href="/vein-wiki/controls" class="inline-link">controls guide</a>. Vehicles are a top priority—learn more in our <a href="/vein-guides/day-1-priorities-guide" class="inline-link">Day 1 priorities</a> guide.</p>

      <h3>Motorized Vehicles</h3>
      
      <h4>Public Safety Vehicles</h4>
      <ul>
          <li>Ambulance</li>
          <li>Police Car</li>
      </ul>

      <h4>Passenger Car</h4>
      <ul>
          <li>Franklin Regalo</li>
          <li>Sokudo Commute</li>
          <li>Tadellini Cobra</li>
      </ul>

      <h4>Light Trucks</h4>
      <ul>
          <li>Franklin Roanoke</li>
          <li>Franklin Trailblazer</li>
          <li>Jetcoze Outback</li>
          <li>Kaze Enforcer</li>
          <li>NMC Mesa</li>
      </ul>

      <h4>Heavy Duty Vehicle</h4>
      <ul>
          <li>Franklin M620</li>
          <li>NM DS-HD</li>
          <li>School Bus</li>
      </ul>

      <h4>Light Vehicles</h4>
      <ul>
          <li>Go Kart</li>
          <li>Golf Cart</li>
          <li>Lawnmower</li>
      </ul>

      <h4>Off-Road</h4>
      <ul>
          <li>ATV</li>
      </ul>

      <h4>Farming</h4>
      <ul>
          <li>Tractor</li>
      </ul>

      <h4>Motorcycle</h4>
      <ul>
          <li>Sokudo DV 1050</li>
      </ul>

      <h3>Human-powered vehicle</h3>
      <ul>
          <li>Bicycle</li>
      </ul>
  `
    },

    {
        "id": 7,
        "title": "Items",
        "description": "The complete searchable database for all items in VEIN Game. Browse categories including Armor, Clothing, Consumables, Medical Items, Tools, Ammo, and Crafting Materials.",
        "imageUrl": "/images/wiki/wiki-07.webp",
        "imageAlt": "Image displaying a wide array of items from all categories in VEIN Game.",
        "publishDate": "2025-11-19",
        "addressBar": "/items",
        "seo": {
            "title": "VEIN Items | Armor, Clothing, Consumables, Medical Items, Tools, Ammo, and Crafting Materials - veingame.net",
            "description": "The complete VEIN Items Database. Find all Armor, Clothing, Consumables, Medical Items, Tools, Ammo, and Crafting Materials. Get stats, crafting recipes, and where to find each item.",
            "keywords": "VEIN items database, VEIN armor, VEIN ammo, VEIN crafting, VEIN consumables, VEIN materials, VEIN ammo, item stats"
        },
        "detailsHtml": `
      <h2>All Items</h2>
      <p>This page provides an index to the complete searchable database of all items available in VEIN Game, categorized by their primary use and function. Browse all items by category in our <a href="/vein-items" class="inline-link">items database</a>. Many items are used for building—learn more in the <a href="/vein-wiki/building" class="inline-link">building guide</a>. For raw ores like Hematite and Graphite, start with the <a href="/vein-guides/vein-game-rook-cavern-guide" class="inline-link">Rook Cavern mining guide</a>.</p>

      <h3>Survival and Equipment</h3>
      <ul>
          <li><strong>Armor:</strong> Protective gear offering defense against damage.</li>
          <li><strong>Clothing:</strong> Apparel items, often providing minor protection or environmental insulation.</li>
          <li><strong>Medical Items:</strong> Supplies for treating injuries and illnesses.</li>
      </ul>

      <h3>Resources and Consumables</h3>
      <ul>
          <li><strong>Consumables (Food):</strong> Items used to replenish hunger and thirst.</li>
          <li><strong>Consumables (Misc.):</strong> General consumable items with various effects.</li>
          <li><strong>Ammo:</strong> Ammunition for all ranged firearms.</li>
          <li><strong>Crafting Items:</strong> Materials used in the creation of tools, weapons, and structures (e.g., Hammer, Tools).</li>
          <li><strong>Materials:</strong> Raw or processed resources essential for crafting and building.</li>
      </ul>

      <h3>Miscellaneous</h3>
      <ul>
          <li><strong>Tools:</strong> Items used for specific interactions, crafting, dismantling, or repairs.</li>
          <li><strong>Special Items:</strong> Unique or rare items with specific gameplay functions.</li>
          <li><strong>Misc. Items:</strong> Items that do not fit into other primary categories.</li>
      </ul>
  `
    },





    // {
    //   id: 1,
    //   title: '',
    //   description: '',
    //   imageUrl: '/images/wiki-01.webp',
    //   imageAlt: '',
    //   publishDate: '',
    //   addressBar: '/',
    //   seo: {
    //     title: '',
    //     description: '',
    //     keywords: '',
    //   },
    //   detailsHtml: ``
    // },
]