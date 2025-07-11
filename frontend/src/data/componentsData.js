const componentsData = {
    'CPU': [
      {
        name: 'Intel Core i9-13900K',
        price: 589.99,
        rating: 4.8,
        description: 'High-performance desktop processor with 24 cores...',
        specs: {
          'Cores': '24 (8P + 16E)',
          'Threads': 32,
          'Base Clock': '3.0 GHz',
          'Max Turbo': '5.8 GHz',
          'Cache': '36MB',
          'TDP': '125W',
          'Socket': 'LGA 1700'
        },
        features: [
          'Intel Thermal Velocity Boost',
          'PCIe 5.0 and 4.0 support',
          'DDR5/DDR4 memory support',
          'Intel UHD Graphics 770'
        ]
      },
      {
        name: 'AMD Ryzen 9 7950X',
        price: 549.99,
        rating: 4.9,
        description: '16-core, 32-thread unlocked desktop processor...',
        specs: {
          'Cores': 16,
          'Threads': 32,
          'Base Clock': '4.5 GHz',
          'Max Boost': '5.7 GHz',
          'Cache': '80MB',
          'TDP': '170W',
          'Socket': 'AM5'
        },
        features: [
          'AMD EXPO technology',
          'PCIe 5.0 support',
          'DDR5 memory only',
          'Unlocked for overclocking'
        ]
      },
      {
        name: 'Intel Core i5-13600K',
        price: 319.99,
        rating: 4.7,
        description: 'Excellent balance of gaming and productivity...',
        specs: {
          'Cores': '14 (6P + 8E)',
          'Threads': 20,
          'Base Clock': '3.5 GHz',
          'Max Turbo': '5.1 GHz',
          'Cache': '24MB',
          'TDP': '125W',
          'Socket': 'LGA 1700'
        },
        features: [
          'Intel Thread Director',
          'PCIe 5.0 and 4.0 support',
          'DDR5 and DDR4 memory support',
          'Intel UHD Graphics 770'
        ]
      },
      {
        name: 'AMD Ryzen 5 7600X',
        price: 249.99,
        rating: 4.6,
        description: '6-core, 12-thread unlocked desktop processor...',
        specs: {
          'Cores': 6,
          'Threads': 12,
          'Base Clock': '4.7 GHz',
          'Max Boost': '5.3 GHz',
          'Cache': '38MB',
          'TDP': '105W',
          'Socket': 'AM5'
        },
        features: [
          'Precision Boost 2',
          'PCIe 5.0 support',
          'DDR5 memory only',
          'Unlocked multiplier'
        ]
      }
    ],
    'Motherboard': [
      {
        name: 'ASUS ROG Maximus Z790 Hero',
        price: 499.99,
        rating: 4.8,
        description: 'Intel Z790 LGA 1700 ATX gaming motherboard...',
        specs: {
          'Socket': 'LGA 1700',
          'Chipset': 'Intel Z790',
          'Form Factor': 'ATX',
          'Memory': 'DDR5 up to 128GB',
          'PCIe Slots': '1x PCIe 5.0 x16, 2x PCIe 4.0 x16',
          'Storage': '5x M.2, 6x SATA',
          'Networking': 'Wi-Fi 6E, 2.5Gb Ethernet'
        },
        features: [
          'ROG SupremeFX audio',
          'Aura Sync RGB lighting',
          '20+1 power stages',
          'Thunderbolt 4 support'
        ]
      },
      {
        name: 'MSI MAG B550 Tomahawk',
        price: 169.99,
        rating: 4.7,
        description: 'AMD AM4 ATX gaming motherboard...',
        specs: {
          'Socket': 'AM4',
          'Chipset': 'AMD B550',
          'Form Factor': 'ATX',
          'Memory': 'DDR4 up to 128GB',
          'PCIe Slots': '1x PCIe 4.0 x16, 1x PCIe 3.0 x16',
          'Storage': '2x M.2, 6x SATA',
          'Networking': '2.5Gb Ethernet'
        },
        features: [
          'Core Boost technology',
          'Mystic Light RGB',
          'PCIe 4.0 support',
          'USB 3.2 Gen 2'
        ]
      },
      {
        name: 'Gigabyte X670 AORUS Elite AX',
        price: 299.99,
        rating: 4.6,
        description: 'AMD AM5 ATX motherboard with DDR5...',
        specs: {
          'Socket': 'AM5',
          'Chipset': 'AMD X670',
          'Form Factor': 'ATX',
          'Memory': 'DDR5 up to 128GB',
          'PCIe Slots': '1x PCIe 5.0 x16, 1x PCIe 4.0 x16',
          'Storage': '4x M.2, 6x SATA',
          'Networking': 'Wi-Fi 6E, 2.5Gb Ethernet'
        },
        features: [
          'PCIe 5.0 support',
          'Dual channel DDR5',
          '12+2+2 phase VRM',
          'Q-Flash Plus'
        ]
      },
      {
        name: 'ASRock B660 Steel Legend',
        price: 149.99,
        rating: 4.5,
        description: 'Intel LGA 1700 ATX motherboard...',
        specs: {
          'Socket': 'LGA 1700',
          'Chipset': 'Intel B660',
          'Form Factor': 'ATX',
          'Memory': 'DDR4 up to 128GB',
          'PCIe Slots': '1x PCIe 4.0 x16, 1x PCIe 3.0 x16',
          'Storage': '3x M.2, 6x SATA',
          'Networking': '2.5Gb Ethernet'
        },
        features: [
          '8+1 power phase design',
          'Polychrome RGB',
          'PCIe 4.0 support',
          'USB 3.2 Gen 2x2'
        ]
      }
    ],
    'GPU': [
      {
        name: 'NVIDIA GeForce RTX 4090',
        price: 1599.99,
        rating: 4.9,
        description: '24GB GDDR6X 384-bit gaming graphics card...',
        specs: {
          'GPU': 'AD102',
          'CUDA Cores': 16384,
          'Boost Clock': '2.52 GHz',
          'Memory': '24GB GDDR6X',
          'Memory Bus': '384-bit',
          'TDP': '450W',
          'Outputs': '3x DisplayPort 1.4a, 1x HDMI 2.1a'
        },
        features: [
          'DLSS 3 technology',
          '4th Gen Tensor Cores',
          '3rd Gen RT Cores',
          'AV1 encoding'
        ]
      },
      {
        name: 'AMD Radeon RX 7900 XTX',
        price: 999.99,
        rating: 4.8,
        description: '24GB GDDR6 384-bit gaming graphics card...',
        specs: {
          'GPU': 'Navi 31',
          'Stream Processors': 6144,
          'Game Clock': '2.3 GHz',
          'Memory': '24GB GDDR6',
          'Memory Bus': '384-bit',
          'TDP': '355W',
          'Outputs': '2x DisplayPort 2.1, 1x HDMI 2.1a'
        },
        features: [
          'AMD FSR 3',
          'RDNA 3 architecture',
          'Chiplet design',
          'DisplayPort 2.1 support'
        ]
      },
      {
        name: 'NVIDIA GeForce RTX 4070 Ti',
        price: 799.99,
        rating: 4.7,
        description: '12GB GDDR6X 192-bit gaming graphics card...',
        specs: {
          'GPU': 'AD104',
          'CUDA Cores': 7680,
          'Boost Clock': '2.61 GHz',
          'Memory': '12GB GDDR6X',
          'Memory Bus': '192-bit',
          'TDP': '285W',
          'Outputs': '3x DisplayPort 1.4a, 1x HDMI 2.1a'
        },
        features: [
          'DLSS 3 support',
          '4th Gen Tensor Cores',
          '3rd Gen RT Cores',
          'AV1 encoding'
        ]
      },
      {
        name: 'AMD Radeon RX 7800 XT',
        price: 499.99,
        rating: 4.6,
        description: '16GB GDDR6 256-bit gaming graphics card...',
        specs: {
          'GPU': 'Navi 32',
          'Stream Processors': 3840,
          'Game Clock': '2.1 GHz',
          'Memory': '16GB GDDR6',
          'Memory Bus': '256-bit',
          'TDP': '263W',
          'Outputs': '2x DisplayPort 2.1, 1x HDMI 2.1a'
        },
        features: [
          'AMD FSR 3 support',
          'RDNA 3 architecture',
          'Infinity Cache',
          'Smart Access Memory'
        ]
      }
    ],
    'RAM': [
      {
        name: 'Corsair Dominator Platinum RGB 32GB',
        price: 179.99,
        rating: 4.8,
        description: 'DDR5 5600MHz CL36 memory kit...',
        specs: {
          'Capacity': '32GB (2x16GB)',
          'Type': 'DDR5',
          'Speed': '5600MHz',
          'Timings': '36-36-36-76',
          'Voltage': '1.25V',
          'ECC': 'No',
          'RGB': 'Yes'
        },
        features: [
          'DHX cooling technology',
          '12 ultra-bright CAPELLIX RGB LEDs',
          'Intel XMP 3.0 certified',
          'AMD EXPO ready'
        ]
      },
      {
        name: 'G.Skill Trident Z5 RGB 64GB',
        price: 299.99,
        rating: 4.7,
        description: 'DDR5 6000MHz CL36 memory kit...',
        specs: {
          'Capacity': '64GB (2x32GB)',
          'Type': 'DDR5',
          'Speed': '6000MHz',
          'Timings': '36-36-36-96',
          'Voltage': '1.35V',
          'ECC': 'No',
          'RGB': 'Yes'
        },
        features: [
          'Customizable RGB lighting',
          'Intel XMP 3.0 certified',
          'AMD EXPO ready',
          'Optimized for Ryzen 7000'
        ]
      },
      {
        name: 'Kingston Fury Beast 16GB',
        price: 59.99,
        rating: 4.6,
        description: 'DDR4 3200MHz CL16 memory kit...',
        specs: {
          'Capacity': '16GB (2x8GB)',
          'Type': 'DDR4',
          'Speed': '3200MHz',
          'Timings': '16-18-18-36',
          'Voltage': '1.35V',
          'ECC': 'No',
          'RGB': 'No'
        },
        features: [
          'Plug and Play at 2666MHz',
          'Intel XMP 2.0 support',
          'Low-profile heat spreader',
          'Compatible with AMD Ryzen'
        ]
      },
      {
        name: 'Crucial Ballistix 32GB',
        price: 129.99,
        rating: 4.5,
        description: 'DDR4 3600MHz CL16 memory kit...',
        specs: {
          'Capacity': '32GB (2x16GB)',
          'Type': 'DDR4',
          'Speed': '3600MHz',
          'Timings': '16-18-18-38',
          'Voltage': '1.35V',
          'ECC': 'No',
          'RGB': 'No'
        },
        features: [
          'Micron die',
          'Intel XMP 2.0 support',
          'Aluminum heat spreader',
          'Optimized for gaming'
        ]
      }
    ],
    'SSD': [
      {
        name: 'Samsung 980 Pro 2TB',
        price: 159.99,
        rating: 4.9,
        description: 'PCIe 4.0 NVMe M.2 SSD...',
        specs: {
          'Capacity': '2TB',
          'Form Factor': 'M.2 2280',
          'Interface': 'PCIe 4.0 x4',
          'Sequential Read': '7000 MB/s',
          'Sequential Write': '5100 MB/s',
          'TBW': '1200TB',
          'Controller': 'Samsung Elpis'
        },
        features: [
          'NVMe 1.3c support',
          'Dynamic Thermal Guard',
          'Full power mode',
          'Samsung Magician software'
        ]
      },
      {
        name: 'WD Black SN850X 1TB',
        price: 99.99,
        rating: 4.8,
        description: 'PCIe 4.0 NVMe M.2 SSD...',
        specs: {
          'Capacity': '1TB',
          'Form Factor': 'M.2 2280',
          'Interface': 'PCIe 4.0 x4',
          'Sequential Read': '7300 MB/s',
          'Sequential Write': '6300 MB/s',
          'TBW': '600TB',
          'Controller': 'WD_BLACK G2'
        },
        features: [
          'Game Mode 2.0',
          'WD Dashboard software',
          'Optional heatsink version',
          'Low power consumption'
        ]
      },
      {
        name: 'Crucial MX500 2TB',
        price: 129.99,
        rating: 4.7,
        description: 'SATA 2.5" SSD...',
        specs: {
          'Capacity': '2TB',
          'Form Factor': '2.5"',
          'Interface': 'SATA 6Gb/s',
          'Sequential Read': '560 MB/s',
          'Sequential Write': '510 MB/s',
          'TBW': '700TB',
          'Controller': 'Silicon Motion SM2258'
        },
        features: [
          'AES 256-bit encryption',
          'Integrated power loss immunity',
          'Dynamic Write Acceleration',
          'Crucial Storage Executive software'
        ]
      },
      {
        name: 'Seagate IronWolf 8TB',
        price: 199.99,
        rating: 4.6,
        description: 'NAS HDD 7200 RPM...',
        specs: {
          'Capacity': '8TB',
          'Form Factor': '3.5"',
          'Interface': 'SATA 6Gb/s',
          'RPM': 7200,
          'Cache': '256MB',
          'MTBF': '1M hours',
          'Workload Rate': '180TB/year'
        },
        features: [
          'AgileArray technology',
          'IronWolf Health Management',
          'RV sensors',
          'Optimized for RAID'
        ]
      }
    ],
    'Case': [
      {
        name: 'Lian Li PC-O11 Dynamic',
        price: 149.99,
        rating: 4.8,
        description: 'Tempered glass ATX mid-tower case...',
        specs: {
          'Type': 'Mid Tower',
          'Motherboard Support': 'E-ATX, ATX, Micro-ATX, Mini-ITX',
          'Expansion Slots': 8,
          'Drive Bays': '3x 2.5", 2x 3.5"',
          'Front I/O': '2x USB 3.0, 1x USB-C, Audio',
          'Max GPU Length': '420mm',
          'Max CPU Cooler Height': '155mm'
        },
        features: [
          'Dual chamber design',
          'Tempered glass panels',
          'Excellent water cooling support',
          'Vertical GPU mount option'
        ]
      },
      {
        name: 'Fractal Design Meshify C',
        price: 99.99,
        rating: 4.7,
        description: 'Compact ATX mid-tower case...',
        specs: {
          'Type': 'Mid Tower',
          'Motherboard Support': 'ATX, Micro-ATX, Mini-ITX',
          'Expansion Slots': 7,
          'Drive Bays': '2x 2.5", 2x 3.5"',
          'Front I/O': '2x USB 3.0, Audio',
          'Max GPU Length': '315mm',
          'Max CPU Cooler Height': '170mm'
        },
        features: [
          'High airflow mesh front panel',
          'Modular interior',
          'Sound-dampening options',
          'Excellent cable management'
        ]
      },
      {
        name: 'NZXT H7 Flow',
        price: 129.99,
        rating: 4.6,
        description: 'ATX mid-tower case with airflow...',
        specs: {
          'Type': 'Mid Tower',
          'Motherboard Support': 'ATX, Micro-ATX, Mini-ITX',
          'Expansion Slots': 7,
          'Drive Bays': '4x 2.5", 2x 3.5"',
          'Front I/O': '1x USB 3.2 Gen 2 Type-C, 2x USB 3.0, Audio',
          'Max GPU Length': '400mm',
          'Max CPU Cooler Height': '185mm'
        },
        features: [
          'Front mesh panel for airflow',
          'Tempered glass side panel',
          'Built-in cable management',
          'RGB controller included'
        ]
      },
      {
        name: 'Corsair 4000D Airflow',
        price: 104.99,
        rating: 4.5,
        description: 'ATX mid-tower case...',
        specs: {
          'Type': 'Mid Tower',
          'Motherboard Support': 'ATX, Micro-ATX, Mini-ITX',
          'Expansion Slots': 7,
          'Drive Bays': '2x 2.5", 2x 3.5"',
          'Front I/O': '1x USB 3.1 Type-C, 1x USB 3.0, Audio',
          'Max GPU Length': '360mm',
          'Max CPU Cooler Height': '170mm'
        },
        features: [
          'High airflow front panel',
          'Spacious interior',
          'RapidRoute cable management',
          'Dust filters on all intakes'
        ]
      }
    ],
    'Power Supply': [
      {
        name: 'Corsair RM850x (2021)',
        price: 149.99,
        rating: 4.8,
        description: '850W 80+ Gold fully modular PSU...',
        specs: {
          'Wattage': '850W',
          'Efficiency': '80+ Gold',
          'Modular': 'Full',
          'Form Factor': 'ATX',
          'PCIe Connectors': '4x 6+2-pin',
          'SATA Connectors': 12,
          'Fan': '135mm Fluid Dynamic Bearing'
        },
        features: [
          'Zero RPM fan mode',
          '105°C Japanese capacitors',
          'Modern standby support',
          '10-year warranty'
        ]
      },
      {
        name: 'Seasonic Focus GX-750',
        price: 129.99,
        rating: 4.7,
        description: '750W 80+ Gold fully modular PSU...',
        specs: {
          'Wattage': '750W',
          'Efficiency': '80+ Gold',
          'Modular': 'Full',
          'Form Factor': 'ATX',
          'PCIe Connectors': '4x 6+2-pin',
          'SATA Connectors': 8,
          'Fan': '120mm Fluid Dynamic Bearing'
        },
        features: [
          'Hybrid silent fan control',
          'Japanese capacitors',
          'Compact 140mm depth',
          '10-year warranty'
        ]
      },
      {
        name: 'EVGA SuperNOVA 1000 G6',
        price: 199.99,
        rating: 4.6,
        description: '1000W 80+ Gold fully modular PSU...',
        specs: {
          'Wattage': '1000W',
          'Efficiency': '80+ Gold',
          'Modular': 'Full',
          'Form Factor': 'ATX',
          'PCIe Connectors': '6x 6+2-pin',
          'SATA Connectors': 12,
          'Fan': '135mm Fluid Dynamic Bearing'
        },
        features: [
          'ECO mode for silent operation',
          '100% Japanese capacitors',
          'High power density',
          '10-year warranty'
        ]
      },
      {
        name: 'be quiet! Straight Power 11 650W',
        price: 119.99,
        rating: 4.5,
        description: '650W 80+ Platinum fully modular PSU...',
        specs: {
          'Wattage': '650W',
          'Efficiency': '80+ Platinum',
          'Modular': 'Full',
          'Form Factor': 'ATX',
          'PCIe Connectors': '4x 6+2-pin',
          'SATA Connectors': 8,
          'Fan': '135mm Silent Wings 3'
        },
        features: [
          'Silent operation',
          'DC-to-DC technology',
          'High-quality components',
          '5-year warranty'
        ]
      }
    ],
    'Coolers': [
      {
        name: 'Noctua NH-D15',
        price: 109.99,
        rating: 4.9,
        description: 'Premium dual-tower CPU cooler...',
        specs: {
          'Type': 'Air Cooler',
          'Socket Support': 'Intel LGA1700/1200/115x, AMD AM5/AM4',
          'Heat Pipes': 6,
          'Fan Size': '2x 140mm',
          'Fan Speed': '300-1500 RPM',
          'Noise Level': '24.6 dB(A)',
          'Height': '165mm'
        },
        features: [
          'Dual tower design',
          'Premium NT-H1 thermal compound',
          'SecuFirm2 mounting system',
          '6-year warranty'
        ]
      },
      {
        name: 'Corsair iCUE H150i ELITE',
        price: 189.99,
        rating: 4.8,
        description: '360mm liquid CPU cooler...',
        specs: {
          'Type': 'AIO Liquid Cooler',
          'Socket Support': 'Intel LGA1700/1200/115x, AMD AM5/AM4',
          'Radiator Size': '360mm',
          'Fan Size': '3x 120mm',
          'Fan Speed': '400-2100 RPM',
          'Noise Level': '10-36 dB(A)',
          'Pump Speed': '2400 RPM'
        },
        features: [
          'RGB lighting with iCUE control',
          'Low-noise pump',
          'High-performance radiator',
          '5-year warranty'
        ]
      },
      {
        name: 'be quiet! Dark Rock Pro 4',
        price: 89.99,
        rating: 4.7,
        description: 'Dual-tower CPU cooler...',
        specs: {
          'Type': 'Air Cooler',
          'Socket Support': 'Intel LGA1700/1200/115x, AMD AM5/AM4',
          'Heat Pipes': 7,
          'Fan Size': '2x (120mm + 135mm)',
          'Fan Speed': '1500 RPM',
          'Noise Level': '24.3 dB(A)',
          'Height': '162.8mm'
        },
        features: [
          'Silent Wings fans',
          'Zero-maintenance design',
          'Advanced mounting system',
          '3-year warranty'
        ]
      },
      {
        name: 'Cooler Master Hyper 212',
        price: 44.99,
        rating: 4.6,
        description: 'Budget tower CPU cooler...',
        specs: {
          'Type': 'Air Cooler',
          'Socket Support': 'Intel LGA1700/1200/115x, AMD AM5/AM4',
          'Heat Pipes': 4,
          'Fan Size': '120mm',
          'Fan Speed': '650-2000 RPM',
          'Noise Level': '8-26 dB(A)',
          'Height': '158.8mm'
        },
        features: [
          'Direct contact heat pipes',
          'Aluminum fins',
          'Easy installation',
          '2-year warranty'
        ]
      }
    ],
  'HDD': [
      {
        name: 'Seagate BarraCuda 4TB',
        price: 89.99,
        rating: 4.6,
        description: '3.5" internal hard drive for desktop computers...',
        specs: {
          'Capacity': '4TB',
          'Form Factor': '3.5"',
          'Interface': 'SATA 6Gb/s',
          'RPM': 5400,
          'Cache': '256MB',
          'MTBF': '1M hours',
          'Workload Rate': '55TB/year'
        },
        features: [
          'Multi-tier caching technology',
          'Low power consumption',
          'Optimized for desktop storage',
          '2-year limited warranty'
        ]
      },
      {
        name: 'WD Black 6TB',
        price: 159.99,
        rating: 4.7,
        description: 'Performance hard drive for gaming and creative applications...',
        specs: {
          'Capacity': '6TB',
          'Form Factor': '3.5"',
          'Interface': 'SATA 6Gb/s',
          'RPM': 7200,
          'Cache': '256MB',
          'MTBF': '1M hours',
          'Workload Rate': '300TB/year'
        },
        features: [
          'Dual-core processor for performance',
          'StableTrac technology',
          'NoTouch ramp load technology',
          '5-year limited warranty'
        ]
      },
      {
        name: 'Toshiba X300 8TB',
        price: 199.99,
        rating: 4.5,
        description: 'High-performance hard drive for gaming and heavy workloads...',
        specs: {
          'Capacity': '8TB',
          'Form Factor': '3.5"',
          'Interface': 'SATA 6Gb/s',
          'RPM': 7200,
          'Cache': '256MB',
          'MTBF': '1M hours',
          'Workload Rate': '180TB/year'
        },
        features: [
          'High torque motor for stability',
          'Error correction technology',
          'Shock sensors',
          '2-year limited warranty'
        ]
      },
      {
        name: 'Seagate Exos X18 16TB',
        price: 349.99,
        rating: 4.8,
        description: 'Enterprise-class hard drive for high-capacity storage...',
        specs: {
          'Capacity': '16TB',
          'Form Factor': '3.5"',
          'Interface': 'SATA 6Gb/s',
          'RPM': 7200,
          'Cache': '256MB',
          'MTBF': '2.5M hours',
          'Workload Rate': '550TB/year'
        },
        features: [
          'Enterprise-class reliability',
          'PowerBalance technology',
          'RV sensors for RAID optimization',
          '5-year limited warranty'
        ]
      }
    ],
    'FCS': [
      {
        name: 'Noctua NF-A12x25 PWM',
        price: 29.99,
        rating: 4.9,
        description: 'Premium quiet fan with advanced aerodynamic design...',
        specs: {
          'Size': '120mm',
          'Bearing': 'SSO2',
          'Speed': '450-2000 RPM',
          'Airflow': '60.1 CFM',
          'Noise Level': '22.6 dB(A)',
          'Static Pressure': '2.34 mm H₂O',
          'Connector': '4-pin PWM'
        },
        features: [
          'Advanced aerodynamic design',
          'Smooth Commutation Drive',
          'Integrated anti-vibration pads',
          '6-year warranty'
        ]
      },
      {
        name: 'Corsair LL120 RGB',
        price: 34.99,
        rating: 4.7,
        description: '120mm RGB LED fan with customizable lighting...',
        specs: {
          'Size': '120mm',
          'Bearing': 'Hydraulic',
          'Speed': '600-1500 RPM',
          'Airflow': '43.25 CFM',
          'Noise Level': '24.8 dB(A)',
          'Static Pressure': '1.61 mm H₂O',
          'Connector': '4-pin PWM'
        },
        features: [
          '16 individually addressable RGB LEDs',
          'iCUE software control',
          'Magnetic levitation bearing',
          '2-year warranty'
        ]
      },
      {
        name: 'be quiet! Silent Wings 3',
        price: 24.99,
        rating: 4.8,
        description: 'High-speed silent fan with advanced fluid dynamic bearing...',
        specs: {
          'Size': '120mm',
          'Bearing': 'Fluid Dynamic',
          'Speed': '1000-2200 RPM',
          'Airflow': '50.5 CFM',
          'Noise Level': '28.1 dB(A)',
          'Static Pressure': '2.30 mm H₂O',
          'Connector': '4-pin PWM'
        },
        features: [
          'Six-pole motor technology',
          'Anti-vibration rubber corners',
          'Stepless speed control',
          '3-year warranty'
        ]
      },
      {
        name: 'Arctic P12 PWM PST',
        price: 9.99,
        rating: 4.6,
        description: 'Value-oriented pressure-optimized fan...',
        specs: {
          'Size': '120mm',
          'Bearing': 'Fluid Dynamic',
          'Speed': '200-1800 RPM',
          'Airflow': '56.3 CFM',
          'Noise Level': '22.5 dB(A)',
          'Static Pressure': '2.20 mm H₂O',
          'Connector': '4-pin PWM'
        },
        features: [
          'Pressure-optimized for radiators',
          'PST (PWM Sharing Technology)',
          'Low noise motor',
          '6-year warranty'
        ]
      }
    ],
    'WCS': [
      {
        name: 'NZXT Kraken Z73 RGB',
        price: 279.99,
        rating: 4.8,
        description: '360mm liquid cooler with customizable LCD display...',
        specs: {
          'Radiator Size': '360mm',
          'Fan Size': '3x 120mm',
          'Fan Speed': '500-1800 RPM',
          'Pump Speed': '800-2800 RPM',
          'Noise Level': '21-36 dB(A)',
          'Socket Support': 'Intel LGA1700/1200/115x, AMD AM5/AM4',
          'Connector': 'USB 2.0, 4-pin PWM'
        },
        features: [
          'Customizable LCD display',
          'CAM software control',
          'Aer P120 fans',
          '6-year warranty'
        ]
      },
      {
        name: 'EK-Quantum Velocity²',
        price: 349.99,
        rating: 4.9,
        description: 'High-end custom water cooling CPU block...',
        specs: {
          'Material': 'Copper, Acetal',
          'Socket Support': 'Intel LGA1700/1200/115x, AMD AM5/AM4',
          'Inlet/Outlet': 'G1/4"',
          'Flow Rate': 'Up to 1000 L/h',
          'Pressure Drop': 'Low',
          'RGB Lighting': 'Yes',
          'Connector': '3-pin ARGB'
        },
        features: [
          'High-performance jet plate',
          'D-RGB lighting',
          'Easy installation',
          '2-year warranty'
        ]
      },
      {
        name: 'Thermaltake Pacific RL360',
        price: 229.99,
        rating: 4.7,
        description: 'Hard tube water cooling kit for custom loops...',
        specs: {
          'Radiator Size': '360mm',
          'Radiator Material': 'Copper',
          'Fan Size': '3x 120mm',
          'Fan Speed': '1000-1500 RPM',
          'Pump Speed': '800-2800 RPM',
          'Tubing Size': '16mm OD',
          'RGB Lighting': 'Yes'
        },
        features: [
          'Complete water cooling kit',
          'D5 pump with reservoir',
          'Hard tube bending kit included',
          '5-year warranty'
        ]
      },
      {
        name: 'Alphacool Eisbaer Aurora 240',
        price: 149.99,
        rating: 4.6,
        description: 'AIO liquid cooler with expandable loop...',
        specs: {
          'Radiator Size': '240mm',
          'Fan Size': '2x 120mm',
          'Fan Speed': '800-2000 RPM',
          'Pump Speed': '2200 RPM',
          'Noise Level': '25 dB(A)',
          'Socket Support': 'Intel LGA1700/1200/115x, AMD AM5/AM4',
          'RGB Lighting': 'Yes'
        },
        features: [
          'Expandable cooling system',
          'Quick disconnect fittings',
          'Aurora RGB lighting',
          '3-year warranty'
        ]
      }
    ]
  };

  export default componentsData;