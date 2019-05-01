import Promise from 'bluebird';
import model from '../../../models';

export  class enrollDao{
  static getAll(){
    return new Promise((resolve,reject)=>{
      console.log('aaaaaaaaaaaaaa');
      model.enroll.findAll()
        .then(enroll_details=>{
          console.log("---->",enroll_details)
          resolve(enroll_details);
        },(error)=>{
          reject(error);})
    })
  }
  static createNew(request){
    return new Promise((resolve,reject)=>{
      models.enroll.create({firstname:request.firstname, lastname:request.lastname,email:request.email,course:request.course,course_id:request.course_id})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }
  static getById(_id){
    return new Promise((resolve,reject)=>{
      model.enroll.findAll({
        where:{
          id:_id
        }
      })
        .then(enroll=>{
          console.log("getbyid=",_id);
          resolve(enroll)},(error)=>{
          reject(error)
        })
    })
  }
  static delete(id){
    return new Promise((resolve,reject)=>{
      model.enroll.delete({
        where:
          {
            _id:id
          }
      }).then(deleteenroll=>{
          console.log(deleteenroll);
          resolve(deleteenroll);},
        (error)=>{
          reject(error);
        });
    });
  }
  static updateEnroll(req,id){
    return new Promise((resolve,reject)=>{
      model.enroll.update({
          enroll:req.enroll},
        {
          where:
            {
              _id:id
            }
        })
        .then(update=>{
          resolve(update);},(error)=>{
          reject(error);
        });
    });
  }
}
