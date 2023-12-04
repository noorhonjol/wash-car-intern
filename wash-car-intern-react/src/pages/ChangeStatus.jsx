import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Form, useActionData, useRouteLoaderData } from 'react-router-dom';
import { rules } from '../ults/constants';

const steps = ['accept','in way' ,'arrived', 'Finshed'];

// eslint-disable-next-line react/prop-types
export default function ChangeStatus() {
    const { rule } = useRouteLoaderData("root");
   
    const{data:details}=useRouteLoaderData("details");
    const actualStatus=details.status;

    const actionResult=useActionData();

    const stepIndex=steps.indexOf(actualStatus);
    
    const [activeStep, setActiveStep] = React.useState(
      stepIndex>0?stepIndex:0
    );

    const handleNext = () => {
     
     if(actionResult){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    };
    return (
      <Box sx={{ width: '90%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {rule===rules.workerRule&&
        (activeStep === steps.length ?
        (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              you are finshed
            </Typography>
          </React.Fragment>
        )
        : 
        (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Form method='patch'>

                <input type="hidden" name="newstatus" value={steps[activeStep]}/>
                
                <Button type='submit' onClick={handleNext} >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Form>
            </Box>
          </React.Fragment>
        ))
        }
        

      </Box>
    );
  }