function CustomInput({
  id,
  title,
  type,
  label,
  required,
  placeholder,
  maxLength,
  minLength,
  pattern,
  titleAttribute,
  onInputChangeHandler,
  step,
  max,
  min,
  value,
}) {
  return (
    <div className='flex items-start flex-col'>
      <label
        htmlFor={id}
        className='text-sm font-medium tracking-wide text-gray-600 dark:text-gray-300 mb-2'
      >
        {label}
        <span className='text-orange-700  dark:text-orange-500'>
          {required ? ' (required)' : ''}
        </span>
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={title}
          required={required}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          title={titleAttribute}
          rows='5'
          className='border-1 border-slate-200 dark:border-gray-600 font-regular placeholder:font-medium font-base tracking-wide rounded-md px-3 py-2 focus:outline-amber-500 dark:text-gray-50 text-gray-900 placeholder:text-gray-400 inline-block w-full mb-5'
          onChange={onInputChangeHandler}
          value={value}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={title}
          required={required}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          max={max}
          min={min}
          step={step}
          title={titleAttribute}
          pattern={pattern}
          className='border-1 border-slate-200 dark:border-gray-600 font-regular placeholder:font-medium font-base tracking-wide rounded-md px-3 py-2 focus:outline-amber-500 dark:scheme-dark dark:text-gray-50 text-gray-900 placeholder:text-gray-400 inline-block w-full mb-5'
          autoComplete='off'
          onChange={onInputChangeHandler}
          value={value}
        />
      )}
    </div>
  );
}

export default CustomInput;
