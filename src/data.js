// ------------------------------------------------------------------
// EDIT HERE: swap the placeholder contact details before going live.
// ------------------------------------------------------------------
export const BUSINESS = {
  name: 'Bradford Locksmith Pro',
  tagline: '24/7 Home Locksmith Service',
  phone: '01274 000 247',
  phoneHref: 'tel:01274000247',
  whatsappHref: 'https://wa.me/447700900247',
  email: 'hello@bradfordlocksmithpro.co.uk',
  area: 'Bradford & West Yorkshire',
  hours: 'Open 24 hours, 7 days a week',
  response: '30–60 min'
};

export const IMG = {
  door: '/uk_composite_front_door.webp',
  cylinder: '/uk_upvc_cylinder_lock.webp',
  key: '/uk_broken_key_extraction.webp',
  window: '/uk_window_lock_repair.webp',
  keys: '/uk_house_keys.webp',
  multipoint: '/uk_multipoint_handle.webp',
  antisnap: '/uk_antisnap_cylinder.webp',
  mortice: '/uk_mortice_lock.webp',
  handle: '/uk_door_handle.webp'
};

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/areas', label: 'Areas' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' }
];

export const SERVICES = [
  {
    slug: 'emergency-home-lockout',
    icon: 'DoorOpen',
    title: 'Emergency Home Lockout',
    short: 'Shut out of your own house? We get you back in without drilling or damaging the door.',
    image: IMG.door,
    intro:
      'Door pulled shut behind you, keys left on the kitchen side, or a lock that has simply stopped co-operating. Our locksmiths specialise in careful, damage-free entry to houses, bungalows and flats, at any hour.',
    signs: [
      'Keys are inside and the door has locked behind you',
      'Key is lost, misplaced or was taken with a bag or coat',
      'Handle lifts but the door will not open from outside',
      'A child, pet or someone vulnerable is waiting inside'
    ],
    steps: [
      'Call us and tell us the door type and your postcode.',
      'We confirm a fixed price and an arrival window before leaving.',
      'We open the door with non-destructive techniques and check the lock still works.',
      'If the lock is worn or compromised, we can replace it on the spot.'
    ],
    note: 'We will ask for proof you live at the property (a letter, bill or photo ID) before starting. It protects you and your neighbours.'
  },
  {
    slug: 'lost-keys-lock-change',
    icon: 'KeyRound',
    title: 'Lost Keys & Lock Changes',
    short: 'Lost, stolen or just moved in? A fresh set of locks means only you hold the keys.',
    image: IMG.keys,
    intro:
      'If keys have gone missing, you cannot know who may find them. Changing the lock cylinder is the quickest and most affordable way to make the old keys useless. We also re-key homes for new owners and tenants.',
    signs: [
      'Keys lost outside the home or taken in a theft',
      'You have just bought or rented and do not know who holds spares',
      'A former partner, tenant or contractor still has a key',
      'Existing locks are loose, worn or stiff to turn'
    ],
    steps: [
      'We identify your cylinder size and door type.',
      'We fit a new insurance-grade cylinder or lock body.',
      'You receive fresh keys, tested on the door before we leave.',
      'We show you how to spot a lock that needs attention in future.'
    ],
    note: 'Most lock changes are completed in under 45 minutes, using locks carried in the van.'
  },
  {
    slug: 'snapped-key-removal',
    icon: 'Wrench',
    title: 'Snapped & Jammed Key Removal',
    short: 'Half a key stuck in the barrel? Stop turning and call us before it gets worse.',
    image: IMG.key,
    intro:
      'Keys snap when a lock has been stiff for a while and extra force is applied at the wrong moment. The broken piece can usually be extracted cleanly, and the lock saved, if it is not pushed in further.',
    signs: [
      'Part of the key is stuck inside the cylinder',
      'The key bends or spins without turning the bolt',
      'The key will not go in or come out',
      'The lock has felt gritty or stiff for weeks'
    ],
    steps: [
      'Please stop turning or forcing the key.',
      'We extract the broken section using fine extraction tools.',
      'We test the lock and cut a working replacement key if the lock is sound.',
      'If the cylinder is damaged, we swap it for a stronger one.'
    ],
    note: 'Tip: spray-on grease or oil can clog a lock. Call us rather than lubricating a jammed barrel.'
  },
  {
    slug: 'upvc-composite-door-repair',
    icon: 'ShieldCheck',
    title: 'uPVC & Composite Door Repair',
    short: 'Handle limp, door stiff or key will not turn? We repair multipoint locks and gearboxes.',
    image: IMG.multipoint,
    intro:
      'Most modern Bradford homes have a uPVC or composite door with a multipoint lock. The mechanism works hard every day. When it begins to fail the door can lock you out, or worse, lock you in.',
    signs: [
      'The handle feels loose, floppy or will not lift',
      'You need to slam or lift the door to lock it',
      'The key turns but the hooks and bolts do not move',
      'The door has dropped and catches on the frame'
    ],
    steps: [
      'We diagnose whether the fault is the cylinder, gearbox or door alignment.',
      'We repair or replace the failed part with a matching component.',
      'Hinges and keeps are adjusted so the door closes smoothly.',
      'Everything is tested from inside and outside before we leave.'
    ],
    note: 'Replacing a gearbox is often far cheaper than replacing the door. We will tell you honestly which makes sense.'
  },
  {
    slug: 'window-lock-repair',
    icon: 'AppWindow',
    title: 'Window Lock & Handle Repair',
    short: 'Stuck, snapped or missing window locks fixed so every window opens and shuts securely.',
    image: IMG.window,
    intro:
      'Double-glazed windows depend on a small locking mechanism that can seize, snap or lose its key. We repair or replace window handles, locks and espagnolette bars, and fit restrictors where children are in the home.',
    signs: [
      'The window handle will not turn or has snapped off',
      'You have lost the window key',
      'The window will not close fully against the frame',
      'You would like a child-safe restrictor fitted'
    ],
    steps: [
      'We inspect the window, handle and locking points.',
      'We source a matching lock, handle or hinge for your frame.',
      'We fit and align the new part and test every locking point.',
      'Optional: add restrictors and extra keys for the whole house.'
    ],
    note: 'Windows are a common way in for opportunists. Check every ground floor lock works, not just the front door.'
  },
  {
    slug: 'anti-snap-lock-upgrades',
    icon: 'LockKeyhole',
    title: 'Anti-Snap Lock Upgrades',
    short: 'Standard euro cylinders can be snapped in seconds. Upgrade to a 3-star rated cylinder.',
    image: IMG.antisnap,
    intro:
      'Many uPVC and composite doors still use basic euro cylinders that can be snapped by an intruder. A TS007 3-star rated cylinder (or a 1-star with 2-star handles) is built to resist this attack and is often what insurers expect.',
    signs: [
      'Your cylinder sits proud of the handle plate',
      'The lock is unbranded or has no kitemark',
      'Your insurer asked about approved locks',
      'You want better peace of mind at night'
    ],
    steps: [
      'We measure the cylinder and check how far it protrudes.',
      'We recommend a rated cylinder in a finish that suits your handle.',
      'We fit it flush so there is nothing to grip or snap.',
      'You receive keys and a security card for your records.'
    ],
    note: 'Ask your insurer which standard they require. We are happy to provide a receipt for your records.'
  },
  {
    slug: 'mortice-night-latch-fitting',
    icon: 'KeySquare',
    title: 'Wooden Door Mortice & Night Latch',
    short: 'Traditional timber front and back doors secured with BS3621 5-lever locks.',
    image: IMG.mortice,
    intro:
      'Older terraces and stone cottages across Bradford often have solid timber doors. A British Standard 5-lever mortice deadlock, paired with a night latch, gives that classic door the strength insurers like to see.',
    signs: [
      'Your timber door only has a basic latch',
      'The mortice lock is worn, loose or sticky',
      'You have lost the key to a mortice lock',
      'You need a lock cut into a new or replaced door'
    ],
    steps: [
      'We check the door thickness and frame condition.',
      'We fit a BS3621 mortice lock and, if wanted, a night latch.',
      'We add hinge bolts or a reinforced keep where needed.',
      'We finish with a clean, tidy look that suits the door.'
    ],
    note: 'We can match brass, chrome or black finishes to keep period doors looking right.'
  },
  {
    slug: 'break-in-repair',
    icon: 'ShieldAlert',
    title: 'After a Break-In: Repair & Secure',
    short: 'Damaged door or window after an attempted entry? We make your home safe again, fast.',
    image: IMG.handle,
    intro:
      'After a break-in, the first priority is making the house secure so you can sleep. We repair or replace damaged locks, frames and handles and can recommend upgrades so it is harder for it to happen twice.',
    signs: [
      'Forced door, frame or lock after a burglary or attempt',
      'Broken window handle or lock',
      'Keys may have been taken during the break-in',
      'You need the home secure again tonight'
    ],
    steps: [
      'We assess the damage and make the property safe first.',
      'We replace broken locks, cylinders and handles.',
      'We reinforce weak points with stronger keeps and plates.',
      'We give you a written note of the work for your insurer.'
    ],
    note: 'Report the incident to the police and keep the crime reference. We can supply an invoice and photos for your claim.'
  }
];

export const PROBLEMS = [
  {
    id: 'locked-out',
    label: 'Locked out',
    title: 'You are locked out of your home',
    text: 'Do not force the door or break a window. Forcing can damage the lock, and glass or frames are costly to repair. Call us with your postcode and door type and we will give you a fixed price and an arrival time.',
    tips: ['Check for a spare key with a neighbour', 'Stay somewhere safe and warm', 'Have proof of address ready']
  },
  {
    id: 'snapped-key',
    label: 'Snapped key',
    title: 'The key has snapped in the lock',
    text: 'Leave the broken piece where it is. Pushing or pulling can wedge it deeper. We can usually extract it and often save the lock itself.',
    tips: ['Do not add oil or glue', 'Keep both halves of the key', 'Do not try to turn the cylinder']
  },
  {
    id: 'handle-limp',
    label: 'Door will not lock',
    title: 'Your door will not lock or the handle is limp',
    text: 'This usually points to a worn gearbox or cylinder in a uPVC or composite door. Do not lock it by lifting hard on the handle every night. Let us repair it before it fails fully.',
    tips: ['Note if the key turns freely', 'Check whether the door has dropped', 'Photograph the lock edge for us']
  },
  {
    id: 'window',
    label: 'Window stuck',
    title: 'A window lock is stuck or the key is missing',
    text: 'A seized window lock is easy to damage. We can free it, repair it or fit a new lock and handle in a visit, with spare keys supplied.',
    tips: ['Do not hit or pry the sash', 'Note the frame colour and make', 'Ask about child restrictors']
  }
];

export const ZONES = [
  {
    id: 'city',
    icon: 'Building2',
    name: 'Bradford City & Inner Suburbs',
    time: '20–40 min',
    note: 'Our home patch, with vans based close by.',
    areas: [
      { name: 'City Centre', code: 'BD1' }, { name: 'Undercliffe', code: 'BD3' }, { name: 'Bowling', code: 'BD4' },
      { name: 'Little Horton', code: 'BD5' }, { name: 'Great Horton', code: 'BD7' }, { name: 'Manningham', code: 'BD8' },
      { name: 'Girlington', code: 'BD8' }, { name: 'Heaton', code: 'BD9' }, { name: 'Frizinghall', code: 'BD9' }
    ]
  },
  {
    id: 'north',
    icon: 'Trees',
    name: 'North & Aire Valley',
    time: '30–50 min',
    note: 'Villages and towns along the Aire.',
    areas: [
      { name: 'Eccleshill', code: 'BD2' }, { name: 'Idle', code: 'BD10' }, { name: 'Thackley', code: 'BD10' },
      { name: 'Shipley', code: 'BD18' }, { name: 'Saltaire', code: 'BD18' }, { name: 'Baildon', code: 'BD17' },
      { name: 'Bingley', code: 'BD16' }, { name: 'Keighley', code: 'BD21' }, { name: 'Ilkley', code: 'LS29' }
    ]
  },
  {
    id: 'south',
    icon: 'Home',
    name: 'South & West Bradford',
    time: '30–50 min',
    note: 'Estates, terraces and hillside villages.',
    areas: [
      { name: 'Wibsey', code: 'BD6' }, { name: 'Low Moor', code: 'BD12' }, { name: 'Wyke', code: 'BD12' },
      { name: 'Clayton', code: 'BD14' }, { name: 'Allerton', code: 'BD15' }, { name: 'Thornton', code: 'BD13' },
      { name: 'Queensbury', code: 'BD13' }, { name: 'Cleckheaton', code: 'BD19' }
    ]
  },
  {
    id: 'nearby',
    icon: 'MapPinned',
    name: 'Nearby West Yorkshire Towns',
    time: '45–75 min',
    note: 'Call first and we will confirm availability.',
    areas: [
      { name: 'Halifax', code: 'HX1' }, { name: 'Pudsey', code: 'LS28' }, { name: 'Leeds', code: 'LS1' }, { name: 'Huddersfield', code: 'HD1' }
    ]
  }
];

export const AREAS = ZONES.flatMap((z) => z.areas);

export const REVIEWS = [
  {
    name: 'Hannah R.',
    place: 'Heaton',
    text: 'Locked out after the school run with a toddler in tow. He was with us in under an hour, got the door open without a scratch and was lovely with my little one.'
  },
  {
    name: 'Imran K.',
    place: 'Manningham',
    text: 'Our uPVC handle had gone floppy for weeks. He explained it was the gearbox, not the whole door, fixed it the same visit and saved us a fortune.'
  },
  {
    name: 'Susan & Paul T.',
    place: 'Baildon',
    text: 'Moved into an older house and wanted every lock changed. Neat, tidy, clear on price from the first call and he left everything cleaner than he found it.'
  },
  {
    name: 'Daniel W.',
    place: 'Thornton',
    text: 'Key snapped at 11pm. He turned up, extracted it and had me inside in minutes. Fair price and no fuss at all.'
  }
];

export const FAQS = [
  {
    q: 'How quickly can you get to my home?',
    a: 'For emergencies we aim to be with you within 30 to 60 minutes across most of Bradford. If it is not urgent, we will book a slot that suits you.'
  },
  {
    q: 'Do you quote before you come out?',
    a: 'Yes. Give us your postcode and door type and we will agree a fixed price before we set off. If what we find on the day is very different from what you described, we explain why before doing anything.'
  },
  {
    q: 'Will you damage my door getting in?',
    a: 'Almost never. We use non-destructive entry techniques and only recommend drilling or replacing a lock when it is genuinely the only option, and only with your agreement.'
  },
  {
    q: 'Do you work on homes only?',
    a: 'Yes, we focus on houses, bungalows, flats and cottages. We do not take on shops, offices or other commercial premises, which keeps us fast and focused for homeowners and tenants.'
  },
  {
    q: 'Do I need to show proof I live there?',
    a: 'We will ask for something showing your name and address, like a utility bill, a letter or photo ID. It is a standard safeguard that protects you.'
  },
  {
    q: 'What locks do you fit?',
    a: 'Insurance-approved cylinders and locks from well-known brands, including TS007 3-star anti-snap cylinders and BS3621 5-lever mortice locks for timber doors.'
  },
  {
    q: 'Is the work guaranteed?',
    a: 'Yes. Locks and parts we fit come with a 12-month guarantee, and our workmanship is covered too.'
  },
  {
    q: 'How can I pay?',
    a: 'Card or cash on completion. You will have an itemised receipt for your records or your insurer.'
  }
];

export const PROMISES = [
  { icon: 'Clock', title: 'Fast local response', text: 'Based in Bradford with vans stocked for most home lock jobs, so we are quick to arrive and quick to finish.' },
  { icon: 'PoundSterling', title: 'Fixed price upfront', text: 'You know the cost before we leave, with no pressure and no surprise extras at the door.' },
  { icon: 'BadgeCheck', title: 'Vetted & insured', text: 'DBS-checked locksmiths, fully insured and trained to current British Standards.' },
  { icon: 'ShieldCheck', title: '12-month guarantee', text: 'Locks and parts we fit are guaranteed, so you are covered long after we have gone.' }
];
