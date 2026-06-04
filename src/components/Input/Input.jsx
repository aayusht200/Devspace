import { toCapitalize } from '../../helperFunctions/functions';

const Input = ({ context, value = '', onChange, className = '' }) => {
      switch (context.type) {
            case 'text': {
                  return (
                        <TextField
                              context={context}
                              value={value}
                              onChange={onChange}
                              className={className}
                        />
                  );
            }
            case 'textarea': {
                  return (
                        <TextArea
                              context={context}
                              value={value}
                              onChange={onChange}
                              className={className}
                        />
                  );
            }
            case 'select': {
                  return (
                        <DropDownList
                              context={context}
                              value={value}
                              onChange={onChange}
                              className={className}
                        />
                  );
            }
      }
};

const TextField = ({ context, value, onChange, className }) => {
      return (
            <>
                  <label htmlFor={context.label}>{context.label} : </label>
                  <input
                        id={context.name}
                        name={context.name}
                        required
                        value={value}
                        onChange={onChange}
                        type="text"
                        className={className}
                        required={context.required}
                  />
            </>
      );
};
const TextArea = ({ context, value, onChange, className }) => {
      return (
            <>
                  <label htmlFor={context.name}>{context.label} : </label>
                  <textarea
                        id={context.name}
                        name={context.name}
                        value={value}
                        onChange={onChange}
                        type="text"
                        className={className}
                  />
            </>
      );
};
const DropDownList = ({ context, value, onChange, className }) => {
      return (
            <>
                  <label htmlFor={`${context.name}-select`}>
                        {context.label}
                  </label>
                  <select
                        name={context.name}
                        id={`${context.name}-select`}
                        onChange={onChange}
                        className={className}
                  >
                        {context.options.map((option) => (
                              <option key={option} value={option}>
                                    {toCapitalize(option)}
                              </option>
                        ))}
                  </select>
            </>
      );
};
export default Input;
