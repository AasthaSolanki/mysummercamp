import model from '../../../models';
import Promise from 'bluebird';

export default class courseDao {

  static getAll(){
    console.log("wqrqwrqwre");
    return new Promise((resolve,reject)=>{
      // resolve(['test']);
      model.course.findAll({})
        .then(result=>{
          console.log("---->",result);
          resolve(result);
        },(error)=>{
          console.log(error);
          reject(error);
        })
    })
  }

  static getById(_id){
    return new Promise((resolve,reject)=>{
      model.course.findAll({
        where:{
          id:_id
        }
      })
        .then(course=>{
          console.log("getbyid=",_id);
          resolve(course)},(error)=>{
          reject(error)
        })
    })
  }
  static delete(id){
    return new Promise((resolve,reject)=>{
      model.course.destoy({
        where:
          {
            _id:id
          }
      }).then(deletecourse=>{
          console.log(deletecourse);
          resolve(deletecourse);},
        (error)=>{
          reject(error);
        });
    });
  }
  static updateCourse(req,id){
    return new Promise((resolve,reject)=>{
      model.course.update({
          course:req.course},
        {
          where:
            {
              _id:id
            }
        })
        .then(updates=>{
          resolve(updates);},(error)=>{
          reject(error);
        });
    });
  }
}
