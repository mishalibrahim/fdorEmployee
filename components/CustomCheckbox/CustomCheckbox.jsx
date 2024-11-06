import React from 'react'
import styles from './CustomCheckbox.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CustomCheckbox = ({ title =false, description =false,required =true, register, errors =false, inputId }) => {
    return (
      <div className="border-b border-dotted border-[#E7E7E7]">
        {
          title && <p className="text-12 font-medium">{title}</p>
        }
    
        <div className="flex flex-col gap-[4px] mt-[5px]">
          <div className="flex gap-[5px] items-center">
            <div className="relative w-[22px] min-w-[22px] h-[22px] rounded-[3px] overflow-hidden ">
              <input
                className={`opacity-0 absolute z-[2] w-full h-full cursor-pointer ${styles.input}`}
                {...register(inputId, { required: required })}
                type="checkbox"
                name={inputId}
                id={inputId}
              />
              <div
                className={`absolute top-0 left-0 w-full h-full bg-[#DEDEDE] text-[#CDCDCD] border-[2px] border-[#CDCDCD] flex justify-center items-center ${styles.custom_checkbox}`}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </div>
            {
              description && <label htmlFor={inputId} className="text-10 text-secondarytext">{description}</label>
            }
          </div>
          {
            errors &&    <p className="text-red-500  text-10 min-h-[12.3px] ">
            {" "}
            {errors[inputId] && "this field is required"}
          </p>
          }
       
        </div>
      </div>
    );
  };

export default CustomCheckbox