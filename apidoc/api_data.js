define({ "api": [
  {
    "type": "put",
    "url": "/api/1.0/edit/:blogId",
    "title": "Edit a blog",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Updated Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t            \"_id\": \"String\",\n                        \"title\": \"String\",\n                        \"blogId\": \"String\",\n                        \"description\": \"String\",\n                        \"bodyHtml\": \"String\",\n                        \"tags\": object(type=array),\n                        \"views\": Number,\n                        \"category\": \"String\",\n                        \"isPublished\": boolean,\n                        \"author\": \"String\",\n                        \"created\": \"date\",\n                        \"lastModified\": \"date\",\n                        \"__v\": Number\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Edit",
    "name": "PutApi10EditBlogid"
  },
  {
    "type": "post",
    "url": "/api/1.0/create",
    "title": "Create a blog",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bodyHtml",
            "description": "<p>blogBody of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t            \"_id\": \"String\",\n                        \"title\": \"String\",\n                        \"blogId\": \"String\",\n                        \"description\": \"String\",\n                        \"bodyHtml\": \"String\",\n                        \"tags\": object(type=array),\n                        \"views\": Number,\n                        \"category\": \"String\",\n                        \"isPublished\": boolean,\n                        \"author\": \"String\",\n                        \"created\": \"date\",\n                        \"lastModified\": \"date\",\n                        \"__v\": Number\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "create",
    "name": "PostApi10Create"
  },
  {
    "type": "post",
    "url": "/api/1.0/delete/:blogId",
    "title": "Delete blog by blogId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog deleted successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "delete",
    "name": "PostApi10DeleteBlogid"
  },
  {
    "type": "get",
    "url": "/api/1.0/all",
    "title": "Get all blogs",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Blogs Found Successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"String\",\n                        \"title\": \"String\",\n                        \"blogId\": \"String\",\n                        \"description\": \"String\",\n                        \"bodyHtml\": \"String\",\n                        \"tags\": object(type=array),\n                        \"views\": Number,\n                        \"category\": \"String\",\n                        \"isPublished\": boolean,\n                        \"author\": \"String\",\n                        \"created\": \"date\",\n                        \"lastModified\": \"date\",\n                        \"__v\": Number\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApi10All"
  },
  {
    "type": "get",
    "url": "/api/1.0/category/:category",
    "title": "Get a blog by it's category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of blog should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t            \"_id\": \"String\",\n                        \"title\": \"String\",\n                        \"blogId\": \"String\",\n                        \"description\": \"String\",\n                        \"bodyHtml\": \"String\",\n                        \"tags\": object(type=array),\n                        \"views\": Number,\n                        \"category\": \"String\",\n                        \"isPublished\": boolean,\n                        \"author\": \"String\",\n                        \"created\": \"date\",\n                        \"lastModified\": \"date\",\n                        \"__v\": Number\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApi10CategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/1.0/category/:category",
    "title": "Get a single blog",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of blog should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t            \"_id\": \"String\",\n                        \"title\": \"String\",\n                        \"blogId\": \"String\",\n                        \"description\": \"String\",\n                        \"bodyHtml\": \"String\",\n                        \"tags\": object(type=array),\n                        \"views\": Number,\n                        \"category\": \"String\",\n                        \"isPublished\": boolean,\n                        \"author\": \"String\",\n                        \"created\": \"date\",\n                        \"lastModified\": \"date\",\n                        \"__v\": Number\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApi10CategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/1.0/singleblog/:blogId",
    "title": "Get a single blog",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t            \"_id\": \"String\",\n                        \"title\": \"String\",\n                        \"blogId\": \"String\",\n                        \"description\": \"String\",\n                        \"bodyHtml\": \"String\",\n                        \"tags\": object(type=array),\n                        \"views\": Number,\n                        \"category\": \"String\",\n                        \"isPublished\": boolean,\n                        \"author\": \"String\",\n                        \"created\": \"date\",\n                        \"lastModified\": \"date\",\n                        \"__v\": Number\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApi10SingleblogBlogid"
  }
] });
