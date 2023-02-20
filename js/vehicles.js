const mounts = [{
    card: "Ace",
    name: "Boblin",
    desc: [
        "Boblin the goblin can serve as a mount for any Medium or smaller creature. No no, Boblin insists. Whenever you intend to travel any distance exceeding 1 mile, make a Wisdom saving throw (DC 12). On a failure, you must ride on Boblin’s shoulders.",
        "Boblin must succeed on a Constitution save after every 5 miles of travel (DC 12). On a failure he gains 1 level of exhaustion. If Boblin dies due to this exhaustion, you must end your journey on the spot and cannot leave for 12 hours, as Boblin’s body must have proper burial rites and a vigil watched."]
},
{
    card: "2",
    name: "Goatbot",
    desc: [
        "The goat is a construct.",
        "The goat’s jump height is trebled.",
        "The goat can spend up to 10 minutes consuming any organic matter, including wood or fabric, up to a 5ft. cube in size. The matter can be part of a much larger object such as a gate or similar structure",
    ]
},
{
    card: "3",
    name: "Bucking Bronco",
    desc: [
        "This mule is an aberration. It seems perfectly natural to anyone who observes it without Truesight, but those who do see a spiralling twisted mass of limbs that end in savage hooves. The mule’s hoof attack has a reach of 30ft, and the mule has no limit to the number of reactions it can take. The mule kicks a creature within reach as a reaction in response to:",
        "A creature dealing psychic damage.",
        "A creature using telepathy.",
        "A creature making an arcana, insight, nature, or perception check regarding the mule.",
        "A creature carrying a parsnip coming within the mule’s reach.",
        "A creature riding the mule that hasn’t fed it in the last 6 hours.",
        "A creature uttering a “curse word”.",
        "A creature casting a spell of 3rd level or higher that has verbal components.",
        "A creature attempting to make a deception check whilst concealing their identity with a disguise or illusion.",
    ]
},
{
    card: "4",
    name: "Pallas of Stone",
    desc: [
        "A large, dust - coloured statue of a feral and angry looking cat.The statue is an earth elemental that can be used as a mount for a Medium or smaller creature, and has a speed of 40ft.and a climb speed of 30ft.",
        "The pallas can create small bridges no larger than 10ft wide by 30ft across as an action.The bridge exists so long as the pallas is within 1 mile of it, or until the pallas dismisses it as an action.",
        "Legend Lore.A creature may draw a square of chalk large enough to contain the pallas.If it does the pallas must succeed on a DC 16 Wisdom save or be trapped within the square for 24 hours.`",
    ]
},
{
    card: "5",
    name: "Head Burier",
    desc: [
        "The Head Burier uses the statistics for an Axe Beak, except that it has a burrow speed of 30ft.and while it is being ridden it can take a creature with it underground without difficulty.",
        "While riding a Head Burier you have disadvantage on perception checks, and advantage on intimidation checks so long as you threaten a creature with being kicked to death."
    ]
},
{
    card: "6",
    name: "The Nautilus",
    desc: [
        "A large shelled cephalopod with a saddle.Anyone can ride it, and in doing so they gain the ability to breathe comfortably underwater.The nautilus has a swim speed of 20ft.",
        "Furthermore the Nautilus has a variety of chambers that magically produce drawers(why not, those chambers aren’t so much in use these days).Each of the 7 drawers can store up to 2 cuft.of items"
    ]
},
{
    card: "7",
    name: "The Pedestrian Pigeon",
    desc: [
        "This pigeon walks rather than flies.It cannot be “ridden” as such, but it can be trained to accept a creature as its “rider” with a successful DC 14 Animal Handling check and a loaf of high quality bread.Close inspection reveals that the pigeon’s wings are functional, and yet it walks through the air instead of flapping.",
        "When a creature is designated the “rider”, it can walk through air as if flying so long as the pigeon is within 10ft, and not currently held by the rider.The rider travels at normal walking speed, but airborne, and the pigeon shall remain by their side.",
        "If the rider is subject to an effect that would cause it to take damage while airborne, the creature must succeed on a Dex save(DC 10 or half the damage, whichever is highest) or fall.",
        "While designated as the rider, a creature always knows the fastest route to get to a location it has already visited, even if that location is on another plane of existence.The pigeon will lead the rider to the nearest means of inter - planar travel; if that means proves to be a creature capable of opening interplanar portals, they can be persuaded with a DC 14 animal handling check, and a loaf of high - quality bread, no matter their disposition otherwise.",
    ]
},
{
    card: "8",
    name: "Alpha Blink dog",
    desc: [
        "A large, fey dog that is big enough to ride.It has a teleport speed of 30ft.and can take any creature riding it with it through teleportation.",
        "1 / short rest, the blink dog can teleport as a reaction to it, or you, taking damage, preventing that damage as a result.",
        "The blink dog makes a Wisdom save(DC 13) in response to any of the following:",
        "A cat",
        "A squirrel",
        "Another dog",
        "Every two hours outside of a long rest",
        "On a failure, the blink dog teleports, either towards the triggering object, or in a random direction.",
    ]
},
{
    card: "9",
    name: "The Ghost Cube",
    desc: [
        "In life a regular, gelatinous creature, now the ghost cube wanders the corridors and shafts of its former home, unable to truly digest anything.However, a canny creature can use it as a means of easy transport, requiring that the creature learn the patrol route of the cube, and not be ethereal at the time.For the duration of travel, any creatures inside the cube treat it as difficult terrain, but can disembark at any time.",
        "Its movements are easily detectable as wind passing through its intangible form makes an audible oscillating sound.",
        "If encountered on the ethereal plane, the cube is a normal gelatinous cube and will attack as normal.",
    ]

},
{
    card: "10",
    name: "Robot Dinosaur",
    desc: [
        "A stegosaurus that has been constructed from metal plates and machine parts.Mounting the beast in order to ride it is tricky to say the least.",
        "The stegosaurus functions the same as its original stat block except that it has a + 3 bonus to AC and its tail deals an additional 1d6 damage on a critical hit.",
        "Each of the plates on its back can be removed and replaced, each one functions as a + 1 magic shield, but anyone can replace them with a magic shield of another type.If a new magic shield is placed into the back of the stegosaurus, it attunes to it instantly, and will remain attuned to it while it remains in place.",
    ]
},
{
    card: "Page",
    name: "Askalotl",
    desc: [
        "This creature has the body of a lion, the wings of an eagle, and the head, gills, and tail of an axolotl.Upon encountering the creature it poses three riddles, requiring either an answer or respectively:",
        "An Int check(DC 15)",
        "A Cha check(DC 16)",
        "A Wis check(DC 17)",
        "Upon correctly answering, the askalotl will follow the rewarded creatures for 1 year and 1 day, serving as a mount.Any creature riding the askalotl can breathe underwater, and gains 2d8 temporary hit points at the start of each round.",
        "During its term of service, it will bombard its rewarded group with questions, some of which are riddles, others are genuine curiosity.It will get upset if players refuse to answer, but is satisfied by an attempt, even if the attempt is failed.While the askalotl is satisfied, it will make the spell Raise Dead available to the party once per week.",
    ]
},
{
    card: "Knight",
    name: "The Optimimic",
    desc: [
        "Not a true mimic but a fey shapeshifter that attempts to replicate creature’s it sees.Under the control of a charismatic creature(Cha 17 or higher) it can adopt any single form and one strange aberration attached such as a horse with crab claws, or a hawk with centipede legs.",
        "If a creature with lower charisma attempts to ride the Optimimic, each time the mount sees a beast, it must succeed on a DC 15 Wisdom save or attempt to shapeshift into that creature."
    ]
},
{
    card: "Queen",
    name: "Floaty Mammoth",
    desc: [
        "Somehow, this mammoth appears perfectly capable of flight despite its size.Its tusks are oddly aerodynamic, its fur seems to almost hover off the beast’s body, and even on land it seems agile and light.Nevertheless, it is shrouded in a strange melancholy.",
        "On command this mammoth hovers in the air without the need of wings, and has a flight speed of 60ft.Furthermore if it moves its full speed all creatures within 10ft of it as it moves must succeed on a DC 15 Dexterity save or be knocked prone by the air currents generated by such a massive creature in flight.",
        "During a long rest, any area that the floaty mammoth can reach with its trunk will be cleaned of dust.",
        "If you encounter another floaty mammoth, your floaty mammoth, and the other will both leave forever.",
    ]
},
{
    card: "King",
    name: "Horse With No Name",
    desc: [
        "The Horse with No Name is immune to magic, and does not need to eat, drink, or sleep.",
        "The Horse with No Name is not Fey.Fey cannot learn your name if you have ever ridden the Horse.Kelpies, unicorns, pegasi, and nightmares flee the Horse on sight.",
        "When you ride the Horse with No Name you arrive at your destination.There are no random encounters along the way.On arrival at your destination roll a Wisdom saving throw(DC 15), on a failure you forget why you came here.",
        "When you ride the Horse with No Name you do not require food, drink, or sleep.",
        "If you attempt to cast Identify or Legend Lore on the Horse with No Name, roll a Wisdom saving throw(DC 15), on a failure you gain a form of long - term madness if you cast Identify, or indefinite madness if you cast Legend Lore.",
        "If the Horse dies, you forget that fact within 24 hours, and the Horse returns to life in the middle of the nearest desert.You will never see it again.",
    ]
}
]
const land = [{
    card: "Ace",
    name: "Spring Staff",
    desc: ["This staff can be used as a magical focus. You can cast the spell Jump at will. Whenever you cast a spell roll 1d10. If the result is equal to or less than the level of the spell you cast, you begin bouncing erratically. You jump 10ft in a random direction at the start of each of your turns, can only use your move action to bounce up to 30ft in a random direction, and cannot benefit from any kind of cover.",
        "If you are under the random bouncing effect while underneath a hard surface less than 10ft overhead, you take 1d6 damage each time you move 10ft or more."
    ]
},
{
    card: "2",
    name: "The Clockwork Bear",
    desc: ["This bear has a key in its back and cymbals in its hands. It has an overland speed of 30ft and can be ridden by up to three creatures to a distance of 1 mile per turn. Each turn of the key tenses the spring. When you have wound the bear, roll 1d100, if the result is equal to or less than the number of turns the bear has received this trip, it becomes a polar bear with resistance to b/p/s and attacks everything within reach."]
},
{
    card: "3",
    name: "Mountain Bike",
    desc: [
        "This bicycle has a climb speed of 40ft and has spider climb.Any creature riding it does not feel the effect of gravity while mounted.",
        "If a creature takes a critical hit or fails a Dexterity save while mounted on the bicycle, they fall off.",
    ]
},
{
    card: "4",
    name: "Monster Truck",
    desc: [
        "This horseless carriage has a metallic grill at the front that can be used to ram into Huge or smaller creatures, doing 2d8 slashing damage on a hit.",
        "If it kills a creature it gains a property for the next 1d6 + 2 days, either chosen in relation to the creature slain or at random:",
        "A breath weapon(young dragon equivalent)",
        "Multiattack(gains arms with blades)",
        "Swim, climb, or flight speed(random or chosen)",
        "Damage resistance",
        "Blood frenzy",
        "Skill proficiency",
        "Pack tactics",
        "Labyrinthine recall",
    ]
},
{
    card: "5",
    name: "The Chariot Rose",
    desc: [
        "Both wheels of this chariot are marked with the cardinal directions, with a prominent spoke pointing north.The chariot can be tipped on its side at any time to grant advantage on Wisdom(survival) checks made to determine direction.",
        "The chariot requires no horse, but accelerates rapidly while travelling in a straight line, beginning at a 30ft speed, gaining 10ft per round, up to a maximum of 240ft, ignoring difficult terrain.The chariot loses all acceleration if it is turned.The chariot requires an action to turn, and can only travel in the cardinal directions.",
    ]
},
{
    card: "6",
    name: "Creeping Carpet",
    desc: [
        "A 15x20ft.carpet made of fine fabrics.When the command word is spoken the tassels curve and lift the carpet as if they were a thousand tiny legs, transporting itself and anyone seated upon it to a named destination.The carpet has a land speed of 150ft and ignores difficult terrain.Any creature on the carpet when it starts moving must succeed on a DC 15 Dexterity save or fall off.Any creature in front of the carpet as it moves must succeed on a DC 15 Dexterity save or fall onto it and be taken wherever it is going."
    ]
},
{
    card: "7",
    name: "The Mushroom Path",
    desc: [
        "A rod of birchwood covered in fungus that can be used to project a 5ft wide path of rapidly growing mushrooms, each of which is brightly coloured and capable of not only supporting the weight of Medium sized creatures but also causes them to bounce along the ground.Your travel time is halved, and your jump distance and height are tripled so long as you travel the mushroom path."
    ]
},
{
    card: "8",
    name: "Sleigh of the Blood Pack",
    desc: [
        "While you are mounted on this sleigh you have advantage on perception checks made to smell.In addition you can determine what types of creatures are present within a 1 mile radius(i.e.dragons, humanoids, elementals and so on) but not your distance to them or their direction.",
        "Furthermore you can spend 10 minutes trying to identify what creatures have passed through an area 1 mile in radius in the last 24 hours.",
        "3 / day you can cast Conjure Animals, summoning only 8 jackals, mastiffs, or wolves, or 2 dire wolves.These creatures will act as your allies in combat, and are also capable of pulling the sleigh if no other pack creatures are available to you.",
    ]
},
{
    card: "9",
    name: "Chariot of Blades",
    desc: [
        "This chariot can move through the spaces of Medium or smaller creatures.If it does, those creatures must succeed on a Dexterity saving throw (DC 16) or begin bleeding.A bleeding creature takes 1d6 damage at the start of each of its turns.A medicine check(DC 14) or magical healing of any kind ends the bleeding effect."
    ]
},
{
    card: "10",
    name: "Crawling Castle",
    desc: [
        "This fortified structure is the size of an average castle, containing the following principle areas:",
        "Barracks(for up to 50 soldiers)",
        "Chapel",
        "Blacksmith",
        "Meeting hall",
        "Sleeping chambers(for up to 20 people)",
        "Kitchens",
        "Stables",
        "Crypt",
        "Mage’s tower / library",
        "The castle has a movement speed of 10ft per round, and crushes everything in front of it.",
    ]
},
{
    card: "Page",
    name: "The Convoy",
    desc: [
        "This train of carts, wagons, and travelling huts frequently appears to those in most need, and friendly faces are often willing to take people where they need to go.The journey will take 1 week no matter the distance, and will pass through strange locations that are recognised by no one who is not already in the convoy.",
        "During the travel period players can exchange coin for strange goods and even stranger services, for example:",
        "Bag of Beans.",
        "Commune.",
        "Smithing services that add finesse to any one handed weapon.",
        "Animal care - beasts that accompany the party gain an additional hit dice permanently.",
        "Animate any object that is Small or smaller.",
        "Curses moved from one creature to another.",
    ]
},
{
    card: "Knight",
    name: "The Tortoise",
    desc: [
        "A heavily armoured cart that weighs far more than any beast of burden could draw.Instead the cart propels itself on stocky legs of metal and woodfibre.The Tortoise has an armour class of 25, resistance to bludgeoning, piercing, and slashing damage, and ignores any damage taken below 20 from a single source.",
        "The Tortoise has a movement speed of 25ft and ignores difficult terrain.Any difficult terrain cause by loose rock, soil, or softer obstacles is normal terrain once the Tortoise has passed over it.",
        "The Tortoise can move through the spaces of medium or smaller creatures.If it does, those creatures must succeed on a Dexterity save(DC 12) or be crushed underneath, taking 8d10 bludgeoning damage.Creatures who pass the save are pushed harmlessly to the side.",
    ]
},
{
    card: "Queen",
    name: "Train of Thought",
    desc: [
        "The train has only a few miles of track scattered erratically around the material plane, mostly in areas where there has been high psychic activity.The ruins of mindflayer hideouts have often been found to have a station standing completely isolated, long after the illithids have gone.",
        "Boarding the train leads to 1d20 instances of the spell Dream being cast, in which the travellers will journey into random dreams.Typically the dreams will be those belonging to potent dreamers, such as night hags, beholders, or stone giants.",
        "If a player can reach the engine room they may attempt to steer the train.Doing so manifests tracks in front of the train that pass through the endless dreamspace.A character must be able to cast the Dream spell and succeed on a DC 20 Charisma check to be able to direct the train to a specific mind.",
        "After mastering the train, you gain the Detect Thoughts spell as a permanent ability that you can cast at will requiring no components.",
    ]
},
{
    card: "King",
    name: "The Grey Worm",
    desc: [
        "A gigantic metal cylinder built in segments, its front end is a vast rock - churning drill.The worm requires a crew of ten creatures, has the statistics of a purple worm, and is not impeded by rock, metal, or any other hard material.",
        "While the worm is being driven it gathers any precious materials in its way.After 10 minutes roll 1d20.If the amount is equal to or less than the amount of times you have rolled this way, a random treasure appropriate for a 14th level party appears in the worm’s cargo hold.",
    ]
}]
const water = [{
    card: "Ace",
    name: "The Boogie Board",
    desc: [
        "This panel of floating material can be used with a successful DC 12 Dexterity check (acrobatics) to travel at 60ft per round across the surface of any body of water within 200ft of a coastline.",
        "While carrying the boogie board you have disadvantage on Charisma checks made to flirt, and disadvantage on saving throws against Otto’s Irresistible Dance.",
    ]
},
{
    card: "2",
    name: "A Sieve",
    desc: [
        "To ride in the sieve a creature must have a Wisdom score of 8 or lower. Up to three creatures can ride in the sieve at a time.",
        "The sieve has a speed through water of 120ft. so long as a mast is made out of a smoking pipe with a ribbon for a sail. It can travel to the Feywild, Material Plane, Beastlands, or Arboria at will.",
    ]
},
{
    card: "3",
    name: "Siren’s Wings",
    desc: [
        "A pair of wings that can be ridden across the surface of water at a speed of 60ft., hovering approximately 5ft above the surface at all times.",
        "While you are riding the wings, you cannot be charmed or frightened, and you cannot be dragged beneath the surface of the water by any physical force.",
    ]
},
{
    card: "4",
    name: "The Umbrella (Inverted)",
    desc: [
        "The umbrella is large enough to seat up to 3 people, has a swim speed of 20ft above water, and prevents all damage or potential harm that could come to its occupants as a result of water events such as storms, waterfalls, spouts, or any other similar phenomena. It is less than useless against creature attacks, and somehow only makes you wetter if it rains.",
    ]
},
{
    card: "5",
    name: "The Dugout",
    desc: [
        "A kayak that glides through water as effortlessly and soundlessly as a crocodile. While you are in the kayak you have advantage on stealth checks, and are considered lightly obscured from creatures on dry land. The paddle counts as a rogue weapon for the purposes of administering sneak attack damage.",
    ]
},
{
    card: "6",
    name: "Ice-Breaker Hull",
    desc: [
        "The hull of this ship contains a small fire spirit that can be agitated on a whim. The prow cuts through ice without any hindrance and the ship can travel at full speed through icy water.",
        "When the ship touches or rams a creature or object, the target takes an additional 2d8 fire damage.",
        "The prow sheds dim blue light out to 10ft. when the spirit is activated.",
    ]
},
{
    card: "7",
    name: "Marrow Boat",
    desc: [
        "A seed that grows over the course of 24 days into a ship when planted within 10ft of any body of water. The boat ripens as it approaches its intended destination before falling gently to pieces. The boat is edible, providing sustenance for the entire journey, and upon completion of its trip, leaves behind a single, viable seed.",
    ]
},
{
    card: "8",
    name: "Coin-operated boat",
    desc: [
        "This ship has a strange artificial gloominess about it, as if it were built by someone attempting to make it seem creepy. There is an automaton at one end with a face shaped into that of a skull with a visible slot between its front teeth. Players may announce their destination and pay the fee that the automaton announces:",
        "Same plane of existence, 1 silver per 10 miles",
        "Different plane of existence, 10 platinum and a specialist token that could take the form of a rare metal or gemstone that is dependent on the destination plane.",
    ]
},
{
    card: "9",
    name: "Ship in a Bottle",
    desc: [
        "A full-sized ship in a vast glass bottle. This ship maintains a steady supply of air even when fully submerged. The ship can be changed at any time, a process taking no less than 1 month of dedicated work, replacing the contents with a ship of your choosing.",
        "If the Cork is ever found and placed into the neck of the bottle, the entire device vanishes, taking ship and crew along with it into the plane of water, never to return.",
    ]
},

{
    card: "10",
    name: "The Black Lantern",
    desc: [
        "A two-person craft that requires both parties to pedal for the propulsion to work. The vessel is in the shape of a toothy fish with a lantern hanging above its mouth.",
        "The vessel has a speed of 15 ft.",
        "The vessel, while in motion, creates a 60ft radius sphere of darkness around itself through which only its own lantern light is visible. The pilots can cause the vessel to make a bite attack (+12 to hit, 2d8 piercing damage and a Huge or smaller target is grappled).",
        "The vessel is also capable of submerging, allowing both crew members to breathe easily whilst underwater. Creatures grappled by the boat do not gain this benefit.",
    ]
},
{
    card: "Page",
    name: "The Scuttlefish",
    desc: [
        "This submersible vehicle is 200ft long and has a swim speed of 120ft. It has been fashioned in the likeness of a kuotoa god whose name is long forgotten, even to those who could pronounce it.",
        "Creatures within the scuttlefish can breathe easily, requiring no exchange of air at any time (although gaseous effects do not disperse easily and linger for twice as long, such as Cloudkill).",
        "The scuttlefish can grapple other seafaring vehicles and monsters up to twice its size. It has a Strength of 27 (+8) for the purpose of grapple checks.",
        "The scuttlefish can conceal itself while submerged, and has a Dexterity score of 20 (+5) and proficiency (+5) in stealth checks.",
    ]
},
{
    card: "Knight",
    name: "Staff of the Desert Prophet",
    desc: [
        "This quarterstaff can be used to cast the spell Destroy Water three times per day. Alternatively a creature may expend all three uses to create a space within a body of still or running water that can be travelled on foot, choosing one of the following effects:",
        "The staff creates a path 15ft wide and 3 miles long that remains in place for 1 hour. All water within this space is harmlessly pushed aside. If the water would flow through the path, it is instead teleported from one side to the other, maintaining walls of water on either side. Creatures that swim cannot pass through this effect, except by crossing over the exposed land.",
        "The staff creates a bubble of 30ft in radius that remains surrounding the bubble for 1 day. Water and Small or smaller creatures within the water are harmlessly pushed aside. Medium or larger creatures may attempt a DC 12 Strength save to breach the bubble, or can choose to follow the flow of water.",
    ]
},
{
    card: "Queen",
    name: "The Dragon Boat",
    desc: [
        "This longship can hold up to 100 medium sized creatures, and has a natural swimming speed of 30ft without a crew. Furthermore, the boat can walk across land at a speed of 30ft.",
        "The boat has a breath weapon that emanates from the figurehead; all creatures in a line 60ft long and 5ft wide must succeed on a Dexterity saving throw (DC 16) or take 10d6 lightning damage, or half as much on a successful one.",
        "The boat must at all times be paid 5% of the loot from any successful adventure or raid which it facilitated, which it stores in its hold. If the crew fail to pay the boat, it turns into an adult blue dragon and beseiges the hometown of everyone in the crew.",
    ]
},
{
    card: "King",
    name: "Mother Hydra",
    desc: [
        "A five mast galleon with the figurehead of a five-headed hydra. Each head of the hydra is a cannon that fires a 180ft line of a damage type (acid, cold, fire, lightning and poison respectively), each one deals 5d10 damage, and twice as much to vehicles.",
        "Each time Mother Hydra takes damage it grows a new addition, such as a forecastle, a new mast, a store, a new crane, a fishing boom, or some other new accessory or addition to its size.",
        "Mother Hydra at this time has 4 levels, a crew capacity of 500, 32 cannons per side and 8 in the fore and aft each, a two level aftcastle, a 1 level forecastle, and can carry up to 200 tonnes of goods in addition to its crew supplement.",
    ]
}]

const air = [{

    card: "Ace",
    name: "Screaming Bird",
    desc: [
        "This airbladder has a bundle of feathers attached at the nozzle end. When fully inflated and released the Screaming Bird emits a high pitched scream that can be heard for 200ft. Any creature holding the Bird flies 2d100ft in a random direction.",
        "The Bird can be inflated to contain as many as 10 charges, each charge lasts 1 round, and the discharging air propels it in a new direction each round. If the Bird collides with a solid object, a creature holding it takes a number of d6 bludgeoning damage equal to the number of feet travelled this round divided by 10.",
    ]
},
{
    card: "2",
    name: "The Line",
    desc: [
        "Two posts of different lengths and a simple handle. Placing both posts upright and affixed to the ground, a creature holding onto the handle flies in a straight line from the taller post to the shorter. Both posts must be on the same plane of existence, and the creature never touches the ground while holding the handle.",
        "The Line confers no special ability to avoid obstacles or hazards, and travelling this way for more than 1 hour requires a Strength check, DC 8 + the number of hours you spend on The Line. If you fail, you fall.",
    ]
},
{
    card: "3",
    name: "Magic Mop",
    desc: [
        "The mop has a flight speed of 120ft and a swim speed of 60ft. While underwater you are encapsulated in a breathable bubble that lasts for 2 hours, but bursts if you submerge below 1 mile beneath the water’s surface.",
    ]
},
{
    card: "4",
    name: "Sky Snake",
    desc: [
        "A 100ft serpent made out of painted wood, held aloft by wings of many colours. To mount the Sky Snake a creature only needs to stand underneath it and hope to catch a ride.",
        "The Sky Snake never lands, cannot be piloted without a wish spell, and will continue along its same circuitous route until the end of time. To get off, a creature need only declare that it has arrived at its destination.",
        "While on board, creatures will only be aware of any other creature with whom they boarded, and one bald and bearded old man who will casually impart nonsensical “wisdom” with anyone he rides with.",
    ]
},
{
    card: "5",
    name: "Aarakocra Wings",
    desc: [
        "A pair of feathered wings that must be flapped by hand in order to achieve a flight speed equal to twice your Strength score.",
        "While wielding these wings you can cast Gust at will, and Gust of Wind up to three times per day. Strength is your ability modifier for these spells.",
    ]
},
{
    card: "6",
    name: "Bleeding Feather Skiff",
    desc: [
        "A fast moving, small airship that can turn faster than a bird on the wing. The airship grants a +4 bonus to Dexterity saves to all creatures on board.",
        "The airship counts as undead for the purposes of rules that pertain to undead creatures, and automatically fails checks against effects that would turn undead. If the airship collides with or intentionally rams an object or creature, the target takes 2d6 necrotic damage.",
    ]
},
{
    card: "7",
    name: "The Owlblimp",
    desc: [
        "A childish facsimile of an owlbear made into a large inflatable, which is attached to a simple cart by rope. Up to 8 creatures can ride in the cart.",
        "The balloon itself is a construct, it is vulnerable to slashing damage, resistant to bludgeoning damage, has a flying speed of 40ft, but otherwise has the statistics of an owlbear. It can fight alongside the party members, but in doing so risks tipping them out of the cart.",
        "The Owlblimp and any creature actively riding in its cart have advantage on Charisma (performance) checks made to entertain children.",
    ]
},
{
    card: "8",
    name: "It Came With a Chair",
    desc: [
        "A scroll bearing an invocation in a blasphemous language that must be spoken with two mouths beneath a blackened sun. When uttered, a tendril of monstrous size belonging to an unknowable entity descends with an extravagant chair resting in its coils.",
        "When a creature takes a seat in the chair, they name a destination that must be under open sky. Once named, the creature is taken to their destination, travelling high above all landmasses and other geographical features.",
        "Anything that witnesses your arrival must succeed on a DC 20 Charisma saving throw or take a random form of long-term madness.",
    ]
},
{
    card: "9",
    name: "Cloud of Plenty",
    desc: [
        "This permanent cloud formation contains an invisible solid surface approximately 100x30ft. that can be stood upon and controlled like a ship from a small podium that resembles a short pillar of frost. The cloud will frequently create small piles of food and water, both on board and -while the cloud is in flight -underneath, causing small deluges of food. The food offered by the cloud can be changed by planting seeds in the invisible surface.",
        "The surface of the cloud is soft and surprisingly dry, but whenever a creature attempts a long rest, roll 1d6. On a roll of 1, that creature’s sleep will be disturbed by the sudden appearance of food around their person.",
    ]
},
{
    card: "10",
    name: "Wild Hunter’s Sled",
    desc: [
        "Requiring nothing more than a tame animal to draw the sled, it can move at a flight speed of 180ft., and it comes equipped with the following special features:",
        "The sled has advantage on Stealth checks while lightly obscured by cold weather.",
        "A quiver inside the vehicle supplies an unlimited amount of ammunition of your choosing.",
        "Whenever you make an attack with a ranged weapon you do not have disadvantage for shooting at long range.",
        "You have resistance to cold damage and the first time each day you take a level of exhaustion due to cold weather effects, you ignore it.",
        "Whenever you take an attack action with a ranged weapon you can make an additional attack. The attack granted this way has disadvantage on the attack roll.",
    ]
},
{
    card: "Page",
    name: "Hummingbird Feather Cap",
    desc: [
        "A bycoket adorned with a spectrum of bright feathers. At a command the feathers whir into life lifting you off the ground. You gain a flight speed of 20ft, advantage on Dexterity saves while airborne, and you are considered under the effects of the Haste spell at all times. If you use the power of the hat for 10 minutes, you gain a level of exhaustion every 10 minutes. These levels are removed via a long rest, or by consuming a large amount of high-sugar content foods.",
    ]
},
{
    card: "Knight",
    name: "Paper Plane",
    desc: [
        "A single A4 sheet of off-white paper, it bears small marks of ink as though words were once on the page but have faded away, and creases across its surface suggest that it has been used as a paper plane on several occasions.",
        "Players may write the details of an airborne vessel onto the paper and then fold it into the shape of a plane (altogether taking 5 minutes). The paper becomes a facsimile of what the players described to the letter if not the spirit of the description.",
        "Any part of the ship that has been described will be made of paper or card of varying degrees of thickness. Rope remains fairly strong, hulls are thin but broadly durable, and water only becomes an issue in extremely heavy rain. Fires spread twice as fast as normal. Weapons disintegrate after a single use.",
    ]
},
{
    card: "Queen",
    name: "Fortified Cape",
    desc: [
        "This cape resembles the crenelations of a castle’s defensive walls. It can be removed and cast out to create a small tower made of the same delicate fabric of the cape. The tower can be directed to fly in any direction, carrying up to 10 Medium creatures inside.",
        "The castle comes with a telescope and provides cover to all creatures inside or manning its battlements.",
        "There is a 10% chance that a fortified cape is sentient, and has a rambunctious and adventurous personality, that may cause it to erratically “follow its heart” and seek out new destinations and undiscovered lands.",
    ]
},
{
    card: "King",
    name: "Dragonblimp",
    desc: ["The figurehead of this inflatable ship is in the form of a dragon with jaws agape, threatening terrible destruction upon all who approach. The blimp has a breath weapon akin to an adult dragon, and resistance to a damage type. Both are dependent on the fuel that the blimp is given:",
        "Black - Humanoid corpses (1/day) or carrion of triple the weight, and 1lb of saltpetre.",
        "Blue - Copper powder, up to 100 GP worth per day and the same in quartz crystals, or half as much if the materials were stolen.",
        "Green - Secrets whispered into the fuel tank, either those of the whisperer or those that it has learned, especially in the form of documents and journals. Exotic poisons worth up to 100 GP per day.",
        "Red - Up to 100 GP per day in alchemist’s fire, administered by a fearful creature.",
        "White - The meat of a powerful creature that has been hunted to death, and frozen no more than a week.",
        "If fed gold the ship’s speed doubles, but loses all offensive capabilities.",
        "The ship has all the properties and abilities of the dragon it last became, except that it has a crew capacity of 100 medium creatures.",
    ]
}]

const vehiclesData = {
    mounts,
    land,
    water,
    air,

}
/**
 {
    card: "",
    name: "",
    desc: [
        
    ]
}
 */
