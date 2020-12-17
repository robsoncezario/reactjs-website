import React from 'react';
import { 
  TextField
} from '@material-ui/core';

const TextFieldWithValidation = (props: any) => {
  const [isFocused, setFocus] = React.useState(props?.autoFocus ?? false);
  const [isInvalid, setError] = React.useState(false);

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist(); 

    const entry : string = (event.target as HTMLInputElement).value;
    const validate = entry.length > 0 && ('validation' in props) && !(props?.validation(entry));

    if(isInvalid !== validate) {
      setError(validate);
    }

    if('onChange' in props) {
      props.onChange(entry);
    }
  }

  const inputOnFocus = () => setFocus(true);

  const inputOnBlur = () => setFocus(false);
  const getHelperText = () => {
    switch(true) {
      case isFocused && 'helperText' in props: 
        return props.helperText;
      case !isFocused && isInvalid === true && 'errorText' in props: 
        return props.errorText;
      default: 
        return false;
    }
  }

  return (
    <TextField
      autoFocus={props?.autoFocus ?? false}
      spellCheck={false}
      margin='dense'
      label={props.label}
      type={props?.type ?? 'text'}
      fullWidth
      error={isInvalid && !isFocused}
      helperText={getHelperText()}
      onChange={inputOnChange}
      onFocus={inputOnFocus}
      onBlur={inputOnBlur}
    />
  )
}

export default TextFieldWithValidation;