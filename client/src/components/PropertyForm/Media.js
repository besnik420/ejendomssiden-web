import React, { useContext } from "react";
import Input from "./Input";
import { useFormik } from "formik";
import { FormContext } from "./PropertyMultiStepForm";
import { Button } from "./Button";
import SelectList from "./SelectList";

const Media = ({ onNextStep, handlePreviousStep }) => {  
  const { formData, setFormData } = useContext(FormContext);
  const videoFromTypes =[
    {name: "Select an option"},
    {name: "Youtube"},
    {name: "Vimeo"},
  ]
  const formik = useFormik({
    initialValues: {
    videoFrom: '',
    videoURL: '',
    virtualTour: '',
    imgFilesNames: [],
    },
    onSubmit: (values) => {
      const data = { ...formData, ...values };
      setFormData(data);
      //alert(JSON.stringify(data, null, 2));
      onNextStep();
    },
  });
    const handleVideoFromTypeChange = (selectedOption) => {
      formik.setFieldValue("videoFrom", selectedOption.name);
    };
    const handleImgName = (e)=>{
        const fileNames = [];
        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i++) {
          fileNames.push(e.target.files[i].name);
          formData.append(
            e.target.files[i].name,
            e.target.files[i]
          );
        }        
      formik.setFieldValue("imgFilesNames", fileNames);
    }
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2>The advertisement's images</h2>
      <p>
        At least 1 image is required for a valid submission. The minimum size is
        500/500 px. You can upload a maximum of 75 images. Uploading PDF files
        is also supported. Images may take longer to be processed.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="min-h-[18.7rem]">
          <div className="flex justify-between gap-x-3">
            <input
              type="file"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full 
              file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-50"
              onChange={handleImgName} multiple="multiple"
            />
          </div>
          <div className="flex justify-between gap-x-3">
            <SelectList
              options={videoFromTypes}
              id={"videoFrom"}
              name={"videoFrom"}
              label={"Video from"}
              onChange={handleVideoFromTypeChange}
            />
            <Input
              label="Add Video ID:"
              placeholder="e.g. ..."
              id="videoURL"
              name="videoURL"
              onChange={formik.handleChange}
              value={formik.values.videoURL}
            />
          </div>
          <label className="font-medium text-sm text-primary-marine-blue block mt-2">
            Virtual Tour:
          </label>
          <textarea
            cols={80}
            className="border border-neutral-light-gray rounded px-4 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-bg-blue-100 font-medium"
            id="virtualTour"
            name="virtualTour"
            onChange={formik.handleChange}
            value={formik.values.virtualTour}
          ></textarea>
        </div>
        <menu className="flex justify-between">
          <li>
            <button
              className="rounded  hover:opacity-70 px-5 py-2 font-medium bg-slate-100"
              onClick={handlePreviousStep}
              type="button"
            >
              Go Back
            </button>
          </li>
          <li>
            <Button type={"secondary"}>Confirm</Button>
          </li>
        </menu>
      </form>
    </section>
  );
};

export default Media;
