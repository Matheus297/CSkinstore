import React from 'react'
import { NumericComponent } from './styles';


interface CurrencyProps {
    value: string;
    setValue: (value: string) => void;
}


const CurrencyInput: React.FC<CurrencyProps> = ({setValue, value}: CurrencyProps) => {
  
    const handleChange = (values: { formattedValue: string; value: string }) => {
        console.log(values.value)
      setValue(values.value);
    };
  
    return (
      <div>
        <NumericComponent
          value={value}
          onValueChange={handleChange}
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          decimalScale={2}
          fixedDecimalScale={true}
          allowNegative={false}
          displayType="input"
          placeholder='R$ 0'
        />
      </div>
    );
  };

export default CurrencyInput