import courseController from '../controller/course-controller';
import enrollController from "../../enroll/controller/enroll-controller";
export default class courseRoutes {
  static init(router) {
    router
      .route('/course')
      .get(courseController.getAll)
      // .post(courseController.createNew);
    router
      .route('/course/:id')
      .get(courseController.getById)
    router
      .route('/enroll/insert')
      .post(enrollController.createNew)
    router
      .route('/course/delete/:id')
      .delete(courseController.delete)
    // router
    //   .route('/course/update/:id')
    //   .put(courseController.updateEnroll)
  }
}
