export interface Topic {
  id: number;
  title: string;
}
export interface Unit {
  id: number;
  title: string;
  topics: Topic[];
}
export interface Subject {
  id: string;
  title: string;
  units: Unit[];
}
export interface Course {
  id: string;
  title: string;
  subjects: Subject[];
  description: string;
}
export const mathsTopics: Unit[] = [{
  id: 1,
  title: "Sets, Relations and Functions",
  topics: [{
    id: 1,
    title: "Sets"
  }, {
    id: 2,
    title: "Relations and Functions"
  }]
}, {
  id: 2,
  title: "Complex Numbers and Quadratic Equations",
  topics: [{
    id: 1,
    title: "Complex Numbers"
  }, {
    id: 2,
    title: "Quadratic Equations"
  }]
}, {
  id: 3,
  title: "Matrices and Determinants",
  topics: [{
    id: 1,
    title: "Matrices"
  }, {
    id: 2,
    title: "Determinants"
  }]
}, {
  id: 4,
  title: "Permutations and Combinations",
  topics: [{
    id: 1,
    title: "Permutations"
  }, {
    id: 2,
    title: "Combinations"
  }]
}, {
  id: 5,
  title: "Binomial Theorem and Its Simple Applications",
  topics: [{
    id: 1,
    title: "Binomial Theorem"
  }, {
    id: 2,
    title: "Applications of Binomial Theorem"
  }]
}, {
  id: 6,
  title: "Sequence and Series",
  topics: [{
    id: 1,
    title: "Sequence"
  }, {
    id: 2,
    title: "Series"
  }]
}, {
  id: 7,
  title: "Limit, Continuity and Differentiability",
  topics: [{
    id: 1,
    title: "Limit and Continuity"
  }, {
    id: 2,
    title: "Differentiability"
  }]
}, {
  id: 8,
  title: "Integral Calculus",
  topics: [{
    id: 1,
    title: "Indefinite Integrals"
  }, {
    id: 2,
    title: "Definite Integrals"
  }, {
    id: 3,
    title: "Applications of Integrals"
  }]
}, {
  id: 9,
  title: "Differential Equations",
  topics: [{
    id: 1,
    title: "First Order Differential Equations"
  }, {
    id: 2,
    title: "Applications of Differential Equations"
  }]
}, {
  id: 10,
  title: "Coordinate Geometry",
  topics: [{
    id: 1,
    title: "Straight Lines"
  }, {
    id: 2,
    title: "Circles"
  }, {
    id: 3,
    title: "Parabola"
  }, {
    id: 4,
    title: "Ellipse"
  }, {
    id: 5,
    title: "Hyperbola"
  }]
}, {
  id: 11,
  title: "Three-Dimensional Geometry",
  topics: [{
    id: 1,
    title: "Coordinates in Space"
  }, {
    id: 2,
    title: "Direction Cosines and Direction Ratios"
  }, {
    id: 3,
    title: "Planes and Straight Lines"
  }]
}, {
  id: 12,
  title: "Vector Algebra",
  topics: [{
    id: 1,
    title: "Vectors and Scalars"
  }, {
    id: 2,
    title: "Vector Addition and Scalar Multiplication"
  }, {
    id: 3,
    title: "Dot and Cross Products"
  }]
}, {
  id: 13,
  title: "Statistics and Probability",
  topics: [{
    id: 1,
    title: "Measures of Dispersion"
  }, {
    id: 2,
    title: "Probability"
  }, {
    id: 3,
    title: "Random Variables and Probability Distributions"
  }]
}, {
  id: 14,
  title: "Trigonometry",
  topics: [{
    id: 1,
    title: "Trigonometric Functions"
  }, {
    id: 2,
    title: "Trigonometric Equations"
  }, {
    id: 3,
    title: "Inverse Trigonometric Functions"
  }]
}];
export const physicsTopics: Unit[] = [{
  id: 1,
  title: "Units and Measurement",
  topics: [{
    id: 1,
    title: "Units"
  }, {
    id: 2,
    title: "Dimensional Analysis"
  }, {
    id: 3,
    title: "Errors in Measurement"
  }]
}, {
  id: 2,
  title: "Kinematics",
  topics: [{
    id: 1,
    title: "Motion in a Straight Line"
  }, {
    id: 2,
    title: "Motion in a Plane"
  }, {
    id: 3,
    title: "Projectile Motion"
  }]
}, {
  id: 3,
  title: "Laws of Motion",
  topics: [{
    id: 1,
    title: "Newton's Laws"
  }, {
    id: 2,
    title: "Friction"
  }, {
    id: 3,
    title: "Circular Motion"
  }]
}, {
  id: 4,
  title: "Work, Energy, and Power",
  topics: [{
    id: 1,
    title: "Work"
  }, {
    id: 2,
    title: "Energy"
  }, {
    id: 3,
    title: "Power"
  }, {
    id: 4,
    title: "Collisions"
  }]
}, {
  id: 5,
  title: "Rotational Motion",
  topics: [{
    id: 1,
    title: "Torque and Angular Momentum"
  }, {
    id: 2,
    title: "Moment of Inertia"
  }, {
    id: 3,
    title: "Rolling Motion"
  }]
}, {
  id: 6,
  title: "Gravitation",
  topics: [{
    id: 1,
    title: "Newton's Law of Gravitation"
  }, {
    id: 2,
    title: "Gravitational Potential Energy"
  }, {
    id: 3,
    title: "Escape Velocity"
  }, {
    id: 4,
    title: "Kepler's Laws"
  }]
}, {
  id: 7,
  title: "Properties of Solids and Liquids",
  topics: [{
    id: 1,
    title: "Elasticity"
  }, {
    id: 2,
    title: "Surface Tension"
  }, {
    id: 3,
    title: "Viscosity"
  }, {
    id: 4,
    title: "Fluid Dynamics"
  }]
}, {
  id: 8,
  title: "Thermodynamics",
  topics: [{
    id: 1,
    title: "Laws of Thermodynamics"
  }, {
    id: 2,
    title: "Heat Engines"
  }, {
    id: 3,
    title: "Entropy"
  }]
}, {
  id: 9,
  title: "Kinetic Theory of Gases",
  topics: [{
    id: 1,
    title: "Equation of State"
  }, {
    id: 2,
    title: "Kinetic Energy and Temperature"
  }, {
    id: 3,
    title: "Mean Free Path"
  }]
}, {
  id: 10,
  title: "Oscillations and Waves",
  topics: [{
    id: 1,
    title: "Simple Harmonic Motion"
  }, {
    id: 2,
    title: "Damped and Forced Oscillations"
  }, {
    id: 3,
    title: "Wave Motion"
  }, {
    id: 4,
    title: "Standing Waves"
  }]
}, {
  id: 11,
  title: "Electrostatics",
  topics: [{
    id: 1,
    title: "Coulomb's Law"
  }, {
    id: 2,
    title: "Electric Field and Potential"
  }, {
    id: 3,
    title: "Gauss's Law"
  }, {
    id: 4,
    title: "Capacitance"
  }]
}, {
  id: 12,
  title: "Current Electricity",
  topics: [{
    id: 1,
    title: "Ohm's Law"
  }, {
    id: 2,
    title: "Kirchhoff's Laws"
  }, {
    id: 3,
    title: "Electrical Resistivity"
  }, {
    id: 4,
    title: "Electrical Energy and Power"
  }]
}, {
  id: 13,
  title: "Magnetic Effects of Current and Magnetism",
  topics: [{
    id: 1,
    title: "Magnetic Field"
  }, {
    id: 2,
    title: "Biot-Savart Law"
  }, {
    id: 3,
    title: "Ampere's Law"
  }, {
    id: 4,
    title: "Magnetic Properties of Materials"
  }]
}, {
  id: 14,
  title: "Electromagnetic Induction and Alternating Currents",
  topics: [{
    id: 1,
    title: "Faraday's Laws"
  }, {
    id: 2,
    title: "Lenz's Law"
  }, {
    id: 3,
    title: "Self and Mutual Inductance"
  }, {
    id: 4,
    title: "AC Circuits"
  }]
}, {
  id: 15,
  title: "Electromagnetic Waves",
  topics: [{
    id: 1,
    title: "Properties of EM Waves"
  }, {
    id: 2,
    title: "Electromagnetic Spectrum"
  }]
}, {
  id: 16,
  title: "Optics",
  topics: [{
    id: 1,
    title: "Reflection and Refraction"
  }, {
    id: 2,
    title: "Lenses and Mirrors"
  }, {
    id: 3,
    title: "Optical Instruments"
  }, {
    id: 4,
    title: "Wave Optics"
  }, {
    id: 5,
    title: "Interference and Diffraction"
  }]
}, {
  id: 17,
  title: "Dual Nature of Matter and Radiation",
  topics: [{
    id: 1,
    title: "Photoelectric Effect"
  }, {
    id: 2,
    title: "de Broglie Wavelength"
  }, {
    id: 3,
    title: "Wave-Particle Duality"
  }]
}, {
  id: 18,
  title: "Atoms and Nuclei",
  topics: [{
    id: 1,
    title: "Atomic Models"
  }, {
    id: 2,
    title: "Nuclear Physics"
  }, {
    id: 3,
    title: "Radioactivity"
  }]
}, {
  id: 19,
  title: "Electronic Devices",
  topics: [{
    id: 1,
    title: "Semiconductor Physics"
  }, {
    id: 2,
    title: "p-n Junction"
  }, {
    id: 3,
    title: "Transistors and Logic Gates"
  }]
}];
export const chemistryTopics: Unit[] = [{
  id: 1,
  title: "Some Basic Concepts in Chemistry",
  topics: [{
    id: 1,
    title: "Matter and its Properties"
  }, {
    id: 2,
    title: "Laws of Chemical Combination"
  }, {
    id: 3,
    title: "Mole Concept"
  }]
}, {
  id: 2,
  title: "Atomic Structure",
  topics: [{
    id: 1,
    title: "Atomic Models"
  }, {
    id: 2,
    title: "Quantum Numbers"
  }, {
    id: 3,
    title: "Electronic Configuration"
  }]
}, {
  id: 3,
  title: "Chemical Bonding and Molecular Structure",
  topics: [{
    id: 1,
    title: "Ionic Bonding"
  }, {
    id: 2,
    title: "Covalent Bonding"
  }, {
    id: 3,
    title: "VSEPR Theory"
  }, {
    id: 4,
    title: "Hybridization"
  }]
}, {
  id: 4,
  title: "Chemical Thermodynamics",
  topics: [{
    id: 1,
    title: "First Law of Thermodynamics"
  }, {
    id: 2,
    title: "Enthalpy and Entropy"
  }, {
    id: 3,
    title: "Gibbs Free Energy"
  }, {
    id: 4,
    title: "Spontaneity of Reactions"
  }]
}, {
  id: 5,
  title: "Solutions",
  topics: [{
    id: 1,
    title: "Types of Solutions"
  }, {
    id: 2,
    title: "Concentration Terms"
  }, {
    id: 3,
    title: "Colligative Properties"
  }, {
    id: 4,
    title: "Abnormal Molecular Mass"
  }]
}, {
  id: 6,
  title: "Equilibrium",
  topics: [{
    id: 1,
    title: "Chemical Equilibrium"
  }, {
    id: 2,
    title: "Ionic Equilibrium"
  }, {
    id: 3,
    title: "Acids and Bases"
  }, {
    id: 4,
    title: "Buffer Solutions"
  }]
}, {
  id: 7,
  title: "Redox Reactions and Electrochemistry",
  topics: [{
    id: 1,
    title: "Oxidation and Reduction"
  }, {
    id: 2,
    title: "Electrochemical Cells"
  }, {
    id: 3,
    title: "Electrolysis"
  }, {
    id: 4,
    title: "Nernst Equation"
  }]
}, {
  id: 8,
  title: "Chemical Kinetics",
  topics: [{
    id: 1,
    title: "Rate of Reaction"
  }, {
    id: 2,
    title: "Factors Affecting Reaction Rate"
  }, {
    id: 3,
    title: "Order and Molecularity"
  }, {
    id: 4,
    title: "Collision Theory"
  }]
}, {
  id: 9,
  title: "Classification of Elements and Periodicity in Properties",
  topics: [{
    id: 1,
    title: "Modern Periodic Table"
  }, {
    id: 2,
    title: "Periodic Trends"
  }, {
    id: 3,
    title: "s, p, d, and f Block Elements"
  }]
}, {
  id: 10,
  title: "P-Block Elements",
  topics: [{
    id: 1,
    title: "Group 13 Elements"
  }, {
    id: 2,
    title: "Group 14 Elements"
  }, {
    id: 3,
    title: "Group 15 Elements"
  }, {
    id: 4,
    title: "Group 16, 17, and 18 Elements"
  }]
}, {
  id: 11,
  title: "d-Block and f-Block Elements",
  topics: [{
    id: 1,
    title: "General Properties of d-Block Elements"
  }, {
    id: 2,
    title: "Transition Elements"
  }, {
    id: 3,
    title: "Lanthanides and Actinides"
  }]
}, {
  id: 12,
  title: "Coordination Compounds",
  topics: [{
    id: 1,
    title: "Werner's Theory"
  }, {
    id: 2,
    title: "Nomenclature"
  }, {
    id: 3,
    title: "Bonding in Coordination Compounds"
  }, {
    id: 4,
    title: "Isomerism"
  }]
}, {
  id: 13,
  title: "Purification and Characterisation of Organic Compounds",
  topics: [{
    id: 1,
    title: "Purification Methods"
  }, {
    id: 2,
    title: "Qualitative Analysis"
  }, {
    id: 3,
    title: "Quantitative Analysis"
  }]
}, {
  id: 14,
  title: "Some Basic Principles of Organic Chemistry",
  topics: [{
    id: 1,
    title: "Hybridization of Carbon"
  }, {
    id: 2,
    title: "Structural and Stereoisomerism"
  }, {
    id: 3,
    title: "Reaction Mechanisms"
  }, {
    id: 4,
    title: "Inductive and Resonance Effects"
  }]
}, {
  id: 15,
  title: "Hydrocarbons",
  topics: [{
    id: 1,
    title: "Alkanes"
  }, {
    id: 2,
    title: "Alkenes"
  }, {
    id: 3,
    title: "Alkynes"
  }, {
    id: 4,
    title: "Aromatic Hydrocarbons"
  }]
}, {
  id: 16,
  title: "Organic Compounds Containing Halogens",
  topics: [{
    id: 1,
    title: "Haloalkanes"
  }, {
    id: 2,
    title: "Haloarenes"
  }, {
    id: 3,
    title: "Reactions and Applications"
  }]
}, {
  id: 17,
  title: "Organic Compounds Containing Oxygen",
  topics: [{
    id: 1,
    title: "Alcohols and Phenols"
  }, {
    id: 2,
    title: "Ethers"
  }, {
    id: 3,
    title: "Aldehydes and Ketones"
  }, {
    id: 4,
    title: "Carboxylic Acids and Derivatives"
  }]
}, {
  id: 18,
  title: "Organic Compounds Containing Nitrogen",
  topics: [{
    id: 1,
    title: "Amines"
  }, {
    id: 2,
    title: "Diazonium Salts"
  }, {
    id: 3,
    title: "Cyanides and Isocyanides"
  }]
}, {
  id: 19,
  title: "Biomolecules",
  topics: [{
    id: 1,
    title: "Carbohydrates"
  }, {
    id: 2,
    title: "Proteins"
  }, {
    id: 3,
    title: "Nucleic Acids"
  }, {
    id: 4,
    title: "Vitamins and Hormones"
  }]
}];
export const biologyTopics: Unit[] = [{
  id: 1,
  title: "Diversity in Living World",
  topics: [{
    id: 1,
    title: "Classification of Living Organisms"
  }, {
    id: 2,
    title: "Taxonomic Categories"
  }, {
    id: 3,
    title: "Binomial Nomenclature"
  }]
}, {
  id: 2,
  title: "Cell Structure and Function",
  topics: [{
    id: 1,
    title: "Cell Theory"
  }, {
    id: 2,
    title: "Prokaryotic and Eukaryotic Cells"
  }, {
    id: 3,
    title: "Cell Organelles"
  }, {
    id: 4,
    title: "Cell Division"
  }]
}, {
  id: 3,
  title: "Plant Physiology",
  topics: [{
    id: 1,
    title: "Transport in Plants"
  }, {
    id: 2,
    title: "Mineral Nutrition"
  }, {
    id: 3,
    title: "Photosynthesis"
  }, {
    id: 4,
    title: "Respiration"
  }]
}, {
  id: 4,
  title: "Human Physiology",
  topics: [{
    id: 1,
    title: "Digestion and Absorption"
  }, {
    id: 2,
    title: "Breathing and Exchange of Gases"
  }, {
    id: 3,
    title: "Body Fluids and Circulation"
  }, {
    id: 4,
    title: "Excretory Products and their Elimination"
  }]
}, {
  id: 5,
  title: "Reproduction",
  topics: [{
    id: 1,
    title: "Reproduction in Organisms"
  }, {
    id: 2,
    title: "Sexual Reproduction in Flowering Plants"
  }, {
    id: 3,
    title: "Human Reproduction"
  }, {
    id: 4,
    title: "Reproductive Health"
  }]
}, {
  id: 6,
  title: "Genetics and Evolution",
  topics: [{
    id: 1,
    title: "Principles of Inheritance and Variation"
  }, {
    id: 2,
    title: "Molecular Basis of Inheritance"
  }, {
    id: 3,
    title: "Evolution"
  }]
}, {
  id: 7,
  title: "Biology and Human Welfare",
  topics: [{
    id: 1,
    title: "Health and Disease"
  }, {
    id: 2,
    title: "Strategies for Enhancement in Food Production"
  }, {
    id: 3,
    title: "Microbes in Human Welfare"
  }]
}, {
  id: 8,
  title: "Biotechnology",
  topics: [{
    id: 1,
    title: "Principles and Processes"
  }, {
    id: 2,
    title: "Applications of Biotechnology"
  }]
}, {
  id: 9,
  title: "Ecology and Environment",
  topics: [{
    id: 1,
    title: "Organisms and Environment"
  }, {
    id: 2,
    title: "Ecosystem"
  }, {
    id: 3,
    title: "Biodiversity and Conservation"
  }, {
    id: 4,
    title: "Environmental Issues"
  }]
}];
export const courses: Course[] = [{
  id: "jee",
  title: "JEE Complete Course",
  description: "Comprehensive preparation for JEE Main and Advanced with expert faculty.",
  subjects: [{
    id: "physics",
    title: "Physics",
    units: physicsTopics
  }, {
    id: "chemistry",
    title: "Chemistry",
    units: chemistryTopics
  }, {
    id: "mathematics",
    title: "Mathematics",
    units: mathsTopics
  }]
}, {
  id: "neet",
  title: "NEET Complete Course",
  description: "Structured learning path for NEET aspirants with detailed subject coverage.",
  subjects: [{
    id: "physics",
    title: "Physics",
    units: physicsTopics
  }, {
    id: "chemistry",
    title: "Chemistry",
    units: chemistryTopics
  }, {
    id: "biology",
    title: "Biology",
    units: biologyTopics
  }]
}, {
  id: "12th",
  title: "12th Standard Complete",
  description: "Comprehensive coverage of 12th standard syllabus for board exam excellence.",
  subjects: [{
    id: "physics",
    title: "Physics",
    units: physicsTopics
  }, {
    id: "chemistry",
    title: "Chemistry",
    units: chemistryTopics
  }, {
    id: "mathematics",
    title: "Mathematics",
    units: mathsTopics
  }]
}];
export const mockTestQuestions = [{
  id: 1,
  question: "Which of the following is a Lewis acid?",
  options: ["NH3", "BF3", "H2O", "CH4"],
  correctAnswer: 1,
  // BF3
  explanation: "BF3 (Boron trifluoride) is a Lewis acid because it can accept a pair of electrons. It has an incomplete octet with only 6 electrons in its valence shell."
}, {
  id: 2,
  question: "The IUPAC name of the compound CH3-CH2-CO-CH3 is:",
  options: ["Butanal", "Butanone", "2-Butanone", "Propanone"],
  correctAnswer: 2,
  // 2-Butanone
  explanation: "The compound CH3-CH2-CO-CH3 is a ketone with 4 carbon atoms (butanone). The carbonyl group is at position 2, so it's named 2-butanone."
}, {
  id: 3,
  question: "Which of the following elements has the highest electronegativity?",
  options: ["Oxygen", "Nitrogen", "Fluorine", "Chlorine"],
  correctAnswer: 2,
  // Fluorine
  explanation: "Fluorine has the highest electronegativity among all elements with a value of 4.0 on the Pauling scale."
}, {
  id: 4,
  question: "What is the hybridization of carbon in ethyne (C2H2)?",
  options: ["sp", "sp2", "sp3", "sp3d"],
  correctAnswer: 0,
  // sp
  explanation: "In ethyne (C2H2), each carbon atom forms a triple bond, which requires sp hybridization. This gives a linear geometry around the carbon atoms."
}, {
  id: 5,
  question: "Which of the following is NOT an example of a buffer solution?",
  options: ["CH3COOH + CH3COONa", "H2CO3 + NaHCO3", "NH4Cl + NH4OH", "NaCl + HCl"],
  correctAnswer: 3,
  // NaCl + HCl
  explanation: "A buffer solution consists of a weak acid and its conjugate base or a weak base and its conjugate acid. NaCl + HCl is not a buffer as HCl is a strong acid and NaCl is a neutral salt that doesn't affect pH significantly."
}, {
  id: 6,
  question: "The process of converting a solid directly to vapor without passing through the liquid state is called:",
  options: ["Sublimation", "Evaporation", "Condensation", "Deposition"],
  correctAnswer: 0,
  // Sublimation
  explanation: "Sublimation is the process where a solid directly transitions to vapor without becoming a liquid. Examples include dry ice (solid CO2) and iodine."
}, {
  id: 7,
  question: "Which quantum number determines the shape of an orbital?",
  options: ["Principal quantum number (n)", "Azimuthal quantum number (l)", "Magnetic quantum number (ml)", "Spin quantum number (ms)"],
  correctAnswer: 1,
  // Azimuthal quantum number (l)
  explanation: "The azimuthal quantum number (l) determines the shape of an orbital. For example, l=0 gives s orbitals (spherical), l=1 gives p orbitals (dumbbell shaped), etc."
}, {
  id: 8,
  question: "Which of the following compounds would undergo SN1 reaction most readily?",
  options: ["CH3CH2Cl", "(CH3)3CCl", "CH3Cl", "CH2=CH-CH2Cl"],
  correctAnswer: 1,
  // (CH3)3CCl
  explanation: "(CH3)3CCl (tert-butyl chloride) undergoes SN1 reaction most readily because it forms a stable tertiary carbocation intermediate, which is stabilized by hyperconjugation from the three methyl groups."
}, {
  id: 9,
  question: "The pH of a 0.1 M acetic acid solution (Ka = 1.8 × 10^-5) is approximately:",
  options: ["1.0", "2.9", "4.3", "5.0"],
  correctAnswer: 2,
  // 4.3
  explanation: "For a weak acid, pH = -log(√(Ka × C)). For 0.1 M acetic acid with Ka = 1.8 × 10^-5, pH ≈ -log(√(1.8 × 10^-5 × 0.1)) ≈ -log(√(1.8 × 10^-6)) ≈ -log(1.34 × 10^-3) ≈ 2.87, which is closest to 2.9."
}, {
  id: 10,
  question: "Which of the following polymers is used in making non-stick cookware?",
  options: ["Polyethylene", "Polyvinyl chloride", "Polytetrafluoroethylene (Teflon)", "Polystyrene"],
  correctAnswer: 2,
  // Polytetrafluoroethylene (Teflon)
  explanation: "Polytetrafluoroethylene (PTFE), commonly known as Teflon, is used in making non-stick cookware due to its high heat resistance and extremely low coefficient of friction."
}];