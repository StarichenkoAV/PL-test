import { CSSProperties, FC } from "react";
import Select, {
  components,
} from "react-select";
import { Icon } from "../Icon";

import css from "./SelectReact.module.scss";

export interface ISelectReactValue {
  value: number;
  label: string;
}

export interface ISelectReactOption {
  value: any;
  label: string;
}

interface SelectReactProps {
  title?: string;
  // eslint-disable-next-line
  options: Array<ISelectReactOption>;
  // eslint-disable-next-line
  selectedValue?: any;
  // eslint-disable-next-line
  onChange: (
    value: any
  ) => void;
  placeholder?: string;
  value?: any;
  width?: string;
  label?: string;
  isSmall?: boolean;
}

export const SelectReact: FC<SelectReactProps> = ({
  options = [],
  title = ``,
  value = null,
  onChange,
  placeholder = ``,
  width = `auto`,
  label = ``,
  isSmall = false,
}: SelectReactProps) => {
  const DropdownIndicator = ({ ...props }: any) => (
    <components.DropdownIndicator {...props}>
      <Icon name="chevron-down" />
    </components.DropdownIndicator>
  );

  const NoOptionsMessage = ({ ...props }: any) => {
    return (
      <components.NoOptionsMessage {...props}>
        Нет вариантов выбора
      </components.NoOptionsMessage>
    );
  };

  const style: CSSProperties = {};

  if (width) style.width = width;

  const styles = {
    // eslint-disable-next-line
    container: (styles: any) => ({
      ...styles,
      width: `100px`,
    }),
    control: (styles: any) => ({
      ...styles,
      minHeight: isSmall ? `36px` : `50px`,
    }),
  };

  const selectProps = {
    className: `veb-react-select`,
    classNamePrefix: `react-select`,
    components: { DropdownIndicator, NoOptionsMessage },
    options,
    value,
    onChange,
    placeholder,
    title,
    styles,
    htmlFor: label,
    defaultMenuIsOpen: false,
    closeMenuOnScroll: true,
  };

  return (
    <div className={css.component} style={style}>
      {Boolean(label) && (
        <label htmlFor={label}>
          {label}
        </label>
      )}
      <Select {...selectProps} />
    </div>
  );
};
