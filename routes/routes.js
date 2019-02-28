const express = require('express')
const controller = require('../controller/controller')
const appConfig = require('../appConfig/appConfig')

//function which sets the route
let setRoutes = (app) => {
    let baseUrl = appConfig.apiVersion + '/blogs'
    app.get(baseUrl + '/all', controller.getAllBlogs) //api documaentation should be included after route
    /**
	 * @api {get} /api/1.0/all Get all blogs
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Blogs Found Successfully",
	    "status": 200,
	    "data": [
					{
						"_id": "String",
                        "title": "String",
                        "blogId": "String",
                        "description": "String",
                        "bodyHtml": "String",
                        "tags": object(type=array),
                        "views": Number,
                        "category": "String",
                        "isPublished": boolean,
                        "author": "String",
                        "created": "date",
                        "lastModified": "date",
                        "__v": Number
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
	 */


    app.post(baseUrl + '/create', controller.createBlog)
      /**
	 * @api {post} /api/1.0/create Create a blog
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} title title of the blog passed as a body parameter
	 * @apiParam {String} description description of the blog passed as a body parameter
	 * @apiParam {String} bodyHtml blogBody of the blog passed as a body parameter
	 * @apiParam {String} category category of the blog passed as a body parameter

	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog Found Successfully.",
	    "status": 200,
	    "data": {
	    	            "_id": "String",
                        "title": "String",
                        "blogId": "String",
                        "description": "String",
                        "bodyHtml": "String",
                        "tags": object(type=array),
                        "views": Number,
                        "category": "String",
                        "isPublished": boolean,
                        "author": "String",
                        "created": "date",
                        "lastModified": "date",
                        "__v": Number
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(baseUrl + '/edit/:blogId', controller.updateTheBlog)
      /**
	 * @api {put} /api/1.0/edit/:blogId Edit a blog
	 * @apiVersion 0.0.1
	 * @apiGroup Edit
	 *
	 * @apiParam {String} blogId The blogId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog Updated Successfully.",
	    "status": 200,
	    "data": {
	    	            "_id": "String",
                        "title": "String",
                        "blogId": "String",
                        "description": "String",
                        "bodyHtml": "String",
                        "tags": object(type=array),
                        "views": Number,
                        "category": "String",
                        "isPublished": boolean,
                        "author": "String",
                        "created": "date",
                        "lastModified": "date",
                        "__v": Number
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/category/:category', controller.viewByCategory)

    /**
	 * @api {get} /api/1.0/category/:category Get a blog by it's category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} category The category of blog should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog Found Successfully.",
	    "status": 200,
	    "data": {
	    	            "_id": "String",
                        "title": "String",
                        "blogId": "String",
                        "description": "String",
                        "bodyHtml": "String",
                        "tags": object(type=array),
                        "views": Number,
                        "category": "String",
                        "isPublished": boolean,
                        "author": "String",
                        "created": "date",
                        "lastModified": "date",
                        "__v": Number
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl + '/delete/:blogId', controller.deleteABlog)
 /**
	 * @api {post} /api/1.0/delete/:blogId Delete blog by blogId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} blogId blogId of the blog passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog deleted successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/singleblog/:blogId', controller.getSingleBlog)
    
    /**
	 * @api {get} /api/1.0/singleblog/:blogId Get a single blog
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} blogId The blogId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog Found Successfully.",
	    "status": 200,
	    "data": {
	    	            "_id": "String",
                        "title": "String",
                        "blogId": "String",
                        "description": "String",
                        "bodyHtml": "String",
                        "tags": object(type=array),
                        "views": Number,
                        "category": "String",
                        "isPublished": boolean,
                        "author": "String",
                        "created": "date",
                        "lastModified": "date",
                        "__v": Number
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/category/:category', controller.viewByCategory)

    /**
	 * @api {get} /api/1.0/category/:category Get a single blog
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} category The category of blog should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog Found Successfully.",
	    "status": 200,
	    "data": {
	    	            "_id": "String",
                        "title": "String",
                        "blogId": "String",
                        "description": "String",
                        "bodyHtml": "String",
                        "tags": object(type=array),
                        "views": Number,
                        "category": "String",
                        "isPublished": boolean,
                        "author": "String",
                        "created": "date",
                        "lastModified": "date",
                        "__v": Number
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */



} //end setRoute function

//module export
module.exports = {
    setRoutes: setRoutes
}