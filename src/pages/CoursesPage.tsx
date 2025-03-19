import React from 'react';
import { useParams } from 'react-router-dom';
import ChatbotInterface from '../components/chatbot/ChatbotInterface';
import { BookOpenIcon, BeakerIcon, CalculatorIcon } from 'lucide-react';

const courseData = {
  jee: {
    title: 'JEE Preparation',
    description: 'Comprehensive preparation for JEE Main & Advanced',
    subjects: {
      mathematics: {
        name: 'Mathematics',
        icon: CalculatorIcon,
        units: [
          { id: 1, title: 'Sets, Relations and Functions' },
          { id: 2, title: 'Complex Numbers & Quadratic Equations' },
          { id: 3, title: 'Matrices and Determinants' },
          { id: 4, title: 'Permutations and Combinations' },
          { id: 5, title: 'Binomial Theorem and Its Applications' },
          { id: 6, title: 'Sequence and Series' },
          { id: 7, title: 'Limit, Continuity & Differentiability' },
          { id: 8, title: 'Integral Calculus' },
          { id: 9, title: 'Differential Equations' },
          { id: 10, title: 'Coordinate Geometry' },
          { id: 11, title: 'Three-Dimensional Geometry' },
          { id: 12, title: 'Vector Algebra' },
          { id: 13, title: 'Statistics and Probability' },
          { id: 14, title: 'Trigonometry' }
        ]
      },
      physics: {
        name: 'Physics',
        icon: BookOpenIcon,
        units: [
          { id: 1, title: 'Units and Measurement' },
          { id: 2, title: 'Kinematics' },
          { id: 3, title: 'Laws of Motion' },
          { id: 4, title: 'Work, Energy, and Power' },
          { id: 5, title: 'Rotational Motion' },
          { id: 6, title: 'Gravitation' },
          { id: 7, title: 'Properties of Solids and Liquids' },
          { id: 8, title: 'Thermodynamics' },
          { id: 9, title: 'Kinetic Theory of Gases' },
          { id: 10, title: 'Oscillations and Waves' },
          { id: 11, title: 'Electrostatics' },
          { id: 12, title: 'Current Electricity' },
          { id: 13, title: 'Magnetic Effects and Magnetism' },
          { id: 14, title: 'Electromagnetic Induction & AC' },
          { id: 15, title: 'Electromagnetic Waves' },
          { id: 16, title: 'Optics & Wave Optics' },
          { id: 17, title: 'Dual Nature of Matter and Radiation' },
          { id: 18, title: 'Atoms and Nuclei' },
          { id: 19, title: 'Electronic Devices' }
        ]
      },
      chemistry: {
        name: 'Chemistry',
        icon: BeakerIcon,
        units: [
          { id: 1, title: 'Some Basic Concepts in Chemistry' },
          { id: 2, title: 'Atomic Structure' },
          { id: 3, title: 'Chemical Bonding and Molecular Structure' },
          { id: 4, title: 'Chemical Thermodynamics' },
          { id: 5, title: 'Solutions' },
          { id: 6, title: 'Equilibrium' },
          { id: 7, title: 'Redox Reactions and Electrochemistry' },
          { id: 8, title: 'Chemical Kinetics' },
          { id: 9, title: 'Classification of Elements' },
          { id: 10, title: 'P-Block Elements' },
          { id: 11, title: 'd-Block and f-Block Elements' },
          { id: 12, title: 'Coordination Compounds' },
          { id: 13, title: 'Purification of Organic Compounds' },
          { id: 14, title: 'Basic Principles of Organic Chemistry' },
          { id: 15, title: 'Hydrocarbons' },
          { id: 16, title: 'Organic Compounds with Halogens' },
          { id: 17, title: 'Organic Compounds with Oxygen' },
          { id: 18, title: 'Organic Compounds with Nitrogen' },
          { id: 19, title: 'Biomolecules' }
        ]
      }
    }
  },
  neet: {
    title: 'NEET Preparation',
    description: 'Complete preparation for NEET examination',
    subjects: {
      physics: {
        name: 'Physics',
        icon: BookOpenIcon,
        units: [
          { id: 1, title: 'Units and Measurement' },
          { id: 2, title: 'Kinematics' },
          { id: 3, title: 'Laws of Motion' },
          { id: 4, title: 'Work, Energy, and Power' },
          { id: 5, title: 'Rotational Motion' },
          { id: 6, title: 'Gravitation' },
          { id: 7, title: 'Properties of Solids and Liquids' },
          { id: 8, title: 'Thermodynamics' },
          { id: 9, title: 'Kinetic Theory of Gases' },
          { id: 10, title: 'Oscillations and Waves' },
          { id: 11, title: 'Electrostatics' },
          { id: 12, title: 'Current Electricity' },
          { id: 13, title: 'Magnetic Effects and Magnetism' },
          { id: 14, title: 'Electromagnetic Induction & AC' },
          { id: 15, title: 'Electromagnetic Waves' },
          { id: 16, title: 'Optics & Wave Optics' },
          { id: 17, title: 'Dual Nature of Matter and Radiation' },
          { id: 18, title: 'Atoms and Nuclei' },
          { id: 19, title: 'Electronic Devices' }
        ]
      },
      chemistry: {
        name: 'Chemistry',
        icon: BeakerIcon,
        units: [
          { id: 1, title: 'Some Basic Concepts in Chemistry' },
          { id: 2, title: 'Atomic Structure' },
          { id: 3, title: 'Chemical Bonding and Molecular Structure' },
          { id: 4, title: 'Chemical Thermodynamics' },
          { id: 5, title: 'Solutions' },
          { id: 6, title: 'Equilibrium' },
          { id: 7, title: 'Redox Reactions and Electrochemistry' },
          { id: 8, title: 'Chemical Kinetics' },
          { id: 9, title: 'Classification of Elements' },
          { id: 10, title: 'P-Block Elements' },
          { id: 11, title: 'd-Block and f-Block Elements' },
          { id: 12, title: 'Coordination Compounds' },
          { id: 13, title: 'Purification of Organic Compounds' },
          { id: 14, title: 'Basic Principles of Organic Chemistry' },
          { id: 15, title: 'Hydrocarbons' },
          { id: 16, title: 'Organic Compounds with Halogens' },
          { id: 17, title: 'Organic Compounds with Oxygen' },
          { id: 18, title: 'Organic Compounds with Nitrogen' },
          { id: 19, title: 'Biomolecules' }
        ]
      },
      biology: {
        name: 'Biology',
        icon: BookOpenIcon,
        units: [
          { id: 1, title: 'Diversity in Living World' },
          { id: 2, title: 'Structural Organization in Plants & Animals' },
          { id: 3, title: 'Cell Structure and Function' },
          { id: 4, title: 'Plant Physiology' },
          { id: 5, title: 'Human Physiology' }
        ]
      }
    }
  },
  '12th': {
    title: '12th Standard',
    description: 'CBSE Class 12 complete syllabus coverage',
    subjects: {
      mathematics: {
        name: 'Mathematics',
        icon: CalculatorIcon,
        units: [
          { id: 1, title: 'Sets, Relations and Functions' },
          { id: 2, title: 'Complex Numbers & Quadratic Equations' },
          { id: 3, title: 'Matrices and Determinants' },
          { id: 4, title: 'Permutations and Combinations' },
          { id: 5, title: 'Binomial Theorem and Its Applications' },
          { id: 6, title: 'Sequence and Series' },
          { id: 7, title: 'Limit, Continuity & Differentiability' },
          { id: 8, title: 'Integral Calculus' },
          { id: 9, title: 'Differential Equations' },
          { id: 10, title: 'Coordinate Geometry' },
          { id: 11, title: 'Three-Dimensional Geometry' },
          { id: 12, title: 'Vector Algebra' },
          { id: 13, title: 'Statistics and Probability' },
          { id: 14, title: 'Trigonometry' }
        ]
      },
      physics: {
        name: 'Physics',
        icon: BookOpenIcon,
        units: [
          { id: 1, title: 'Units and Measurement' },
          { id: 2, title: 'Kinematics' },
          { id: 3, title: 'Laws of Motion' },
          { id: 4, title: 'Work, Energy, and Power' },
          { id: 5, title: 'Rotational Motion' },
          { id: 6, title: 'Gravitation' },
          { id: 7, title: 'Properties of Solids and Liquids' },
          { id: 8, title: 'Thermodynamics' },
          { id: 9, title: 'Kinetic Theory of Gases' },
          { id: 10, title: 'Oscillations and Waves' },
          { id: 11, title: 'Electrostatics' },
          { id: 12, title: 'Current Electricity' },
          { id: 13, title: 'Magnetic Effects and Magnetism' },
          { id: 14, title: 'Electromagnetic Induction & AC' },
          { id: 15, title: 'Electromagnetic Waves' },
          { id: 16, title: 'Optics & Wave Optics' },
          { id: 17, title: 'Dual Nature of Matter and Radiation' },
          { id: 18, title: 'Atoms and Nuclei' },
          { id: 19, title: 'Electronic Devices' }
        ]
      },
      chemistry: {
        name: 'Chemistry',
        icon: BeakerIcon,
        units: [
          { id: 1, title: 'Some Basic Concepts in Chemistry' },
          { id: 2, title: 'Atomic Structure' },
          { id: 3, title: 'Chemical Bonding and Molecular Structure' },
          { id: 4, title: 'Chemical Thermodynamics' },
          { id: 5, title: 'Solutions' },
          { id: 6, title: 'Equilibrium' },
          { id: 7, title: 'Redox Reactions and Electrochemistry' },
          { id: 8, title: 'Chemical Kinetics' },
          { id: 9, title: 'Classification of Elements' },
          { id: 10, title: 'P-Block Elements' },
          { id: 11, title: 'd-Block and f-Block Elements' },
          { id: 12, title: 'Coordination Compounds' },
          { id: 13, title: 'Purification of Organic Compounds' },
          { id: 14, title: 'Basic Principles of Organic Chemistry' },
          { id: 15, title: 'Hydrocarbons' },
          { id: 16, title: 'Organic Compounds with Halogens' },
          { id: 17, title: 'Organic Compounds with Oxygen' },
          { id: 18, title: 'Organic Compounds with Nitrogen' },
          { id: 19, title: 'Biomolecules' }
        ]
      }
    }
  }
};

const CoursesPage: React.FC = () => {
  const { courseId } = useParams<{ courseId?: string }>();
  const course = courseId ? courseData[courseId as keyof typeof courseData] : null;

  return (
    <div className="w-full">
      {!courseId && (
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold">Welcome to HOPES ACADEMY</h1>
          <p className="mt-2 text-lg">
            Your journey to success begins here. Explore our comprehensive
            courses designed for JEE, NEET, and 12th standard preparation.
          </p>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {course ? course.title : 'All Courses'}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {course
            ? course.description
            : 'Explore our comprehensive courses designed to help you excel in your exams.'}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        {course ? (
          <div className="space-y-8">
            {Object.entries(course.subjects).map(([key, subject]) => (
              <div
                key={key}
                className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 dark:bg-gray-700 p-3 rounded-lg">
                    <subject.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h2 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                    {subject.name}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subject.units.map((unit) => (
                    <div
                      key={unit.id}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-500 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        Unit {unit.id}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {unit.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(courseData).map(([key, course]) => (
              <div
                key={key}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {course.description}
                </p>
                <div className="space-y-2">
                  {Object.values(course.subjects).map((subject) => (
                    <div
                      key={subject.name}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <subject.icon className="h-4 w-4 mr-2" />
                      <span>{subject.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ChatbotInterface />
    </div>
  );
};

export default CoursesPage;