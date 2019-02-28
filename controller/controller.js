const express = require('express')
const mongoose = require('mongoose')
//import shortid
const shortid = require('short-id')

//import model
const blogModel = require('../models/BlogModel') //model name declared in blogmodel.js

//import library
const response=require('../libs/responseFormat')
//import logger lib
const logger=require('../libs/loogerLibs')

//create a blog function 
let createBlog = (req, res) => {

    console.log('Inside createBlog function'); //So call is ok, routes are working oK
    let newBlogId = shortid.generate();

    console.log(req.body);
    //let me show u the error...ok??yes middleware?Yeah, u were using body-parser after your routes, but body-parser and other 
    //middlewares should be use before calling routess...

    //so the problem was when we were using req.body.title, the compiler was unable to use body-parser
    let newBlog = new blogModel({
        title: req.body.title,
        blogId: newBlogId,
        description: req.body.description,
        bodyHtml: req.body.bodyHtml,
        tags: req.body.tags,
        views: req.body.views,
        category: req.body.category,
        isPublished: true,
        author: req.body.author,
        created: Date.now(),
        lastModified: Date.now()
    }) //end new blogModel
    console.log(newBlog);
    newBlog.save((err, result) => {
        if (err) {
            let apiResponse=response.generateResponse(true,"Error occured",500,null)
            res.send(apiResponse)
        } else {
        let apiResponse=response.generateResponse(false,"Blog Created Successfully",200,result)
    res.send(apiResponse)   
    }

    })
} //end createblog function


//update the blog with req.params=blogId
let updateTheBlog = (req, res) => {
        let options = req.body
        console.log(options)
        blogModel.updateMany({
                'blogId': req.params.blogId
            }, options, {
                multi: true
            }).exec((err, result) => {
                if (err) {
                    let apiResponse=response.generateResponse(true,"Error occured",500,null)
                    res.send(apiResponse)
                } else if (result == undefined || result == '' || result == null) {
                    let apiResponse=response.generateResponse(true,"No Blog Found",404,null)
                    res.send(apiResponse)
                } else {
                    let apiResponse=response.generateResponse(false,"Blog Updated Successfully",200,result)
                    res.send(apiResponse)
                }
            })
        } //end update blog


        //function to get all blogs
        let getAllBlogs = (req, res) => {
            //use mongoose find command in schema
            blogModel.find()
                .lean() //gets plain js objects instead of mongoose object
                .exec((err, result) => {
                    if (err) {
                        //using logger
                        logger.error("error ocuured","controller:getAllBlogs",10)
                        let apiResponse=response.generateResponse(true,"Error occured",500,null)
                        res.send(apiResponse)
                    } else if (result == undefined || result == null || result == '') {
                        let apiResponse=response.generateResponse(true,"No Blog Found",404,null)
                    res.send(apiResponse)
                    } else {
                        logger.info("Blogs Found Success","controller:getAllBlogs",8)
                        let apiResponse=response.generateResponse(false,"Blogs Found Successfully",200,result)
                        res.send(apiResponse)
                    }
                })

        } //end getAllBlogs

        //read a single blog
        let getSingleBlog = (req, res) => {
            blogModel.findOne({
                'blogId': req.params.blogId
            }, (err, result) => {
                if (err) {
                    let apiResponse=response.generateResponse(true,"Error occured",500,null)
            res.send(apiResponse)
                } else if (result == undefined || result == null || result == '') {
                    let apiResponse=response.generateResponse(true,"No Blog Found",404,null)
                    res.send(apiResponse)
                } else {
                    let apiResponse=response.generateResponse(false,"Blog Found Successfully",200,result)
                    res.send(apiResponse)
                }
            })
        } //end read single blog

        //view/read blog by category
        let viewByCategory = (req, res) => {
            blogModel.find({
                'category': req.params.category
            }, (err, result) => {
                if (err) {
                    let apiResponse=response.generateResponse(true,"Error occured",500,null)
                    res.send(apiResponse)
                } else if (result == null || result == undefined || result == '') {
                    let apiResponse=response.generateResponse(true,"No Blog Found",404,null)
                    res.send(apiResponse)
                } else {
                    let apiResponse=response.generateResponse(false,"Blog Found Successfully",200,result)
                    res.send(apiResponse)
                }
            })
        }


        //delete a blog
        let deleteABlog=(req,res)=>{
            blogModel.remove({'blogId':req.params.blogId}).exec((err,result)=>{
                if(err){
                    let apiResponse=response.generateResponse(true,"Error occured",500,null)
            res.send(apiResponse)
                }
                else if(result==null||result==undefined||result==''){
                    let apiResponse=response.generateResponse(true,"No Blog Found",404,null)
                    res.send(apiResponse)
                }
                else{
                    let apiResponse=response.generateResponse(false,"Blog deleted successfully",200,result)
                    res.send(apiResponse)
                }
            })
        }



        module.exports = {
            getAllBlogs: getAllBlogs,
            createBlog: createBlog,
            viewByCategory: viewByCategory,
            getSingleBlog: getSingleBlog,
            updateTheBlog: updateTheBlog,
            deleteABlog:deleteABlog
        }