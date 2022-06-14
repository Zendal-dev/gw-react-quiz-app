import Select from 'react-select'

const SelectField = ({
   options,
   field,
   form,
   isInvalid,
   placeholder,
   onChange
}) => {

   const getValue = () => {
      if (field.name === 'answerCount') {
         return options.find(option => option.value === field.value)
      }
      return options.find(option => option.value === field.value) || ''
   }

   return (
      <Select
         styles={{
            control: base => ({
               ...base,
               margin: '10px 0',
               zIndex: '0',
               fontSize: '.9rem',
               borderColor: '#dcdcdc',
               borderWidth: '2px',
               border: `2px solid ${isInvalid && '#f00'}`,
            }),

         }}
         options={ options }
         name={ field.name }
         value={ getValue() }
         onChange={ option => {
            onChange && onChange(option.value)
            form.setFieldValue(field.name, option.value)
         } }
         onBlur={ field.onBlur }
         placeholder={ placeholder || 'Выберите правильный ответ'}
      />
   )
}

export default SelectField
