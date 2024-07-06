import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendRes from "../../utils/sendRes";
import { BlogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogService.createBlogIntoBD(req.body);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Created successfully",
    data: result,
  });
});
const getBlog = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogFromBD();
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog found successfully",
    data: result,
  });
});
const getABlog = catchAsync(async (req, res) => {
  const result = await BlogService.getABlogFromBD(req.params.id);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog found successfully",
    data: result,
  });
});
const updateBlog = catchAsync(async (req, res) => {
  const result = await BlogService.updateBlogIntoBD(req.params.id, req.body);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});
export const BlogController = {
  createBlog,
  getBlog,
  getABlog,
  updateBlog,
};
