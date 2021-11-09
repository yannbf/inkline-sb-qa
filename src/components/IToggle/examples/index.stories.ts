import IToggle from '../index.vue';
import {
    IToggleBasicExample,
    IToggleColorVariantsExample,
    IToggleDisabledExample,
    IToggleReadonlyExample,
    IToggleSizeVariantsExample
} from './index';
import { colorArgType, sizeArgType } from '@inkline/inkline/__storybook__';

export default {
    component: IToggle,
    title: 'Forms/Toggle',
    argTypes: {
        ...colorArgType(['light', 'dark']),
        ...sizeArgType()
    }
};

const Template = (args: any) => ({
    components: {
        IToggleBasicExample
    },
    setup: () => ({ args }),
    template: '<IToggleBasicExample v-bind="args" />'
});

export const Basic = Template.bind({});
export const ColorVariants = () => IToggleColorVariantsExample;
export const Disabled = () => IToggleDisabledExample;
export const Readonly = () => IToggleReadonlyExample;
export const SizeVariants = () => IToggleSizeVariantsExample;