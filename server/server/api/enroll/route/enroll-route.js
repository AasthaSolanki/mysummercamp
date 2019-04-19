import enrollController from '../controller/enroll-controller'
export default class enrollRoutes {
  static init(router){
    router
      .route('/enroll')
      .get(enrollController.getAll)
    router
      .route('/enroll/:id')
      .get(enrollController.getById)
    router
      .route('/enroll/insert')
      .post(enrollController.createNew)
    router
      .route('/enroll/delete/:id')
      .delete(enrollController.delete)
    router
      .route('/enroll/update/:id')
      .put(enrollController.updateEnroll)
  }
}
