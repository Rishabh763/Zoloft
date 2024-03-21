'use client'

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState} from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

// import { useRouter } from 'next/router';

function page() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  // const router = useRouter();
  // const { data } = router.query;

  // const dataArray = JSON.parse(data);

  // Use the dataArray as needed
    // console.log('Updated Answers:', dataArray);
    const [selectedId, setSelectedId] = useState(null);
    const [doctorId, setdoctorId] = useState(null);

      const doctors =[
        {
            "id":1,
            "name":"Ms.Prachi Tripathi",
            "role":"Psychologist",
            "experience":"7 years",
            "fees":"2000",
            "info":"Ms. Prachi Tripathi says In overall 7 years of my experience I have inculcated a penchant for therapy and growth. I strongly believe that the energy to transform ourselves lies within us, and once we begin to seek it, there are only positive transformations against our troubled selves. Having worked with various individuals of all ages, professionals, and social groups, at various settings like hospitals, schools, NGOs and private centers, over time I’ve amassed immense insight as a professional and know-how of this field.I believe one needs to be aware of how time and effort they have been putting in resisting their circumstances. One needs to know that every phase of life demands a different version of you. All you need to be doing is, embracing the change and taking the responsibility to work on yourself rather than fixing the environment. As a professional my key responsibility is to help you explore resources and empower you to be self reliant through your journey in therapy."
    
        },    
        {
            "id":2,
            "name":"Md.Anushree Chatterji",
            "role":"Psychologist",
            "experience":"15 years",
            "fees":"3500",
            "info":"Ms. Anushree Chatterji says A passionate mental health professional with 10 years of experience in creating impact in the lives of many people with diverse backgrounds. Her practice includes a combination of the right tools and techniques along with quick resolution. Equipped with the right balance of knowledge backed with authentic certification in Art Therapy, NLP Master Practitioner, Clinical Hypnotherapy, and REBT Therapy she offers to work with her clients in bringing out thier best and nothing less. If you want to make a difference in your life and thrive in every area of your life, you would want to get in touch now!"
        },
    
    
        {
            "id":3,
            "name":"Dr.Shyam Mithiya",
            "role":"Psychaitrist",
            "experience":"17 years",
            "fees":"1750",
            "info":"Dr. Shyam Mithiya specializations are child youth & geriatric problems, women problems, sexual disorders and marital therapy, de-addiction, headache, stress."
        },
    
    
        {
            "id":4,
            "name":"Dr.Paresh C. Trivedi",
            "role":"Psychaitrist",
            "experience":"29 years",
            "fees":"1500",
            "info":"Dr. Paresh c Trivedi is practicing psychiatrist in Mumbai in Andheri West area with more than 21 years of experience in this field.His core skills include accurately diagnosing and managing psychiatric conditions and sexology , excellent counselling skills and empathetic attitude.Apart from managing adults with psychiatric problems, he takes special interest in looking into and managing child psychiatric conditions, counselling children and parents.He is a member of Indian Medical Association (IMA), American Psychiatric Association, Indian Psychiatric Society, Association Of Medical Consultants.He is able to communicate fluently in Marathi, Hindi, Gujarati and English"
            
        }
    ]
        
        const items = [
            {
              id: '1',
              title: 'Card 1',
              subtitle: 'Information 1',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis aspernatur repudiandae dicta alias eaque voluptates architecto dolor. Quia maxime similique tempora in quasi doloremque, quod nisi ullam aut ab debitis culpa saepe ex maiores.',
              disease : [ "Cancer", "Diabetes" ],
            },
            {
              id: '2',
              title: 'Card 2',
              subtitle: 'Information 2',
              description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            },
            {
              id: '3',
              title: 'Card 3',
              subtitle: 'Information 3',
              description:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            },
            {
              id: '4',
              title: 'Card 4',
              subtitle: 'Information 4',
              description:
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
          ];


          const anexity = [

          ]

        return (
          <ReactLenis root>
            
          
            <div className='recommedation'>
              <motion.div className="bg-purple-600 px-10 py-28 min-h-screen">
                <h1 className='text-center text-6xl font-bold mb-6'>Courses</h1>
                <div className="grid ">
                  {items.map((item) => (
                    <motion.div
                      className={`card-course min-h-[200px] bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 p-2 ${
                        selectedId === item.id ? 'card-selected' : ''
                      }`}
                      layoutId={`card-container-${item.id}`}
                      onClick={() => setSelectedId(item.id)}
                      key={item.id}
                      initial={{ scale: 1 }}
                      animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
                      transition={{ duration: 0.3 }}
                    >
                      <div className="card-content">
                        <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
                        <motion.h5 className="text-sm  font-bold mb-1 text-gray-700">{item.description}</motion.h5>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <AnimatePresence>
                  {selectedId && (
                    <motion.div
                      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {items.map((item) => (
                        item.id === selectedId && (
                          <motion.div
                            className="relative bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                            layoutId={`card-container-${item.id}`}
                            key={item.id}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                          >
                            <motion.div className="relative">
                              <motion.button
                                className="absolute w-fit top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                                onClick={() => setSelectedId('')}
                              >
                                Close
                              </motion.button>
                              <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
                              <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                              <motion.p className="text-md text-gray-700 mb-4">{item.description}</motion.p>
                              <motion.p
                                className="text-md text-gray-700"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                Additional content can go here!
                              </motion.p>
                            </motion.div>
                          </motion.div>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <hr />
              <div className='grid '>
              <motion.div className="bg-purple-600 px-10 py-28 min-h-screen">
              <h1 className='text-center text-6xl font-bold mb-6'>Doctors</h1>
                <div className="grid ">
                  {doctors.map((doc) => (
                    <motion.div
                      className={`min-h-[200px] bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 p-2 ${
                        selectedId === doc.id ? 'card-selected' : ''
                      }`}
                      layoutId={`card-container-${doc.id}`}
                      onClick={() => setdoctorId(doc.id)}
                      key={doc.id}
                      initial={{ scale: 1 }}
                      animate={{ scale: doctorId === doc.id ? 1.1 : 1 }} // Increase scale on doctor card
                      transition={{ duration: 0.3 }}
                    >
                      <div className="card-content">
                        <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{doc.name}</motion.h2>
                        <motion.h5 className="text-sm  font-bold mb-1 text-gray-700">{doc.role}</motion.h5>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <AnimatePresence>
                  {doctorId && (
                    <motion.div
                      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {doctors.map((doc) => (
                        doc.id === doctorId && (
                          <motion.div
                            className="relative bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                            layoutId={`card-container-${doc.id}`}
                            key={doc.id}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                          >
                            <motion.div className="relative">
                              <motion.button
                                className="absolute w-fit top-1 right-1 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                                onClick={() => setdoctorId('')}
                              >
                                Close
                              </motion.button>
                              <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{doc.name}</motion.h2>
                              <motion.h5 className="text-sm font-bold mb-1  whitespace-normal text-gray-700">{doc.info}</motion.h5>
                              <motion.p className="text-md text-gray-700 mb-4">{doc.experience}</motion.p>
                              <motion.p
                                className="text-md text-gray-700"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                {doc.fees}
                              </motion.p>
                            </motion.div>
                          </motion.div>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              </div>
              <div className="wrapper flex justify-center bg-purple-600 pb-20"><button type="submit" className='px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 w-fit text-center rounded-full text-xl btn2'>Join Community</button></div>


            </div>
            </ReactLenis>
          )
}

export default page