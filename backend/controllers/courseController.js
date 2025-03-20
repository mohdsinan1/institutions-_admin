const Course =require('../model/coursModel')

const createCourse = async (req, res) => {
  try {
      const { title, duration, content, softwares } = req.body;
      const newCourse = new Course({ 
          title, 
          duration, 
          content, 
          softwares: Array.isArray(softwares) ? softwares : softwares.split(",").map(s => s.trim())
      });
      await newCourse.save();
      res.status(201).json(newCourse);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};



const getCourse = async(req,res)=>{
  try{
  const courses = await Course.find()
  res.status(200).json(courses);
  }
  catch(error){

    res.status(500).json({ message: error.message });

  }

}


module.exports={
    createCourse,
   getCourse
}