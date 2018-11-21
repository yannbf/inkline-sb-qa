import { uid } from 'inkline/helpers';

import AttributesProviderMixin from 'inkline/mixins/components/providers/AttributesProviderMixin';
import ClassesProviderMixin from 'inkline/mixins/components/providers/ClassesProviderMixin';
import EmitProviderMixin from 'inkline/mixins/components/providers/EmitProviderMixin';
import PopupProviderMixin from 'inkline/mixins/components/providers/PopupProviderMixin';

import OnFocusMethodMixin from 'inkline/mixins/components/methods/OnFocusMethodMixin';

import SizePropertyMixin from 'inkline/mixins/components/properties/SizePropertyMixin';
import VariantPropertyMixin from 'inkline/mixins/components/properties/VariantPropertyMixin';
import DisabledPropertyMixin from 'inkline/mixins/components/properties/DisabledPropertyMixin';

import ClickOutside from 'inkline/directives/click-outside';

export default {
    name: 'IModal',
    mixins: [
        AttributesProviderMixin,
        ClassesProviderMixin,
        EmitProviderMixin,

        OnFocusMethodMixin,

        SizePropertyMixin,
        VariantPropertyMixin,
        DisabledPropertyMixin,
    ],
    directives: {
        ClickOutside
    },
    props: {
        transition: {
            type: String,
            default: 'zoom-in-center-transition'
        }
    },
    data() {
        return {
            visible: false,
            triggerElement: null,
            id: this.$attrs.id || uid('modal')
        };
    },
    methods: {
        show() {
            if (this.disabled) return;

            this.visible = true;
        },
        hide() {
            if (this.disabled) return;

            this.visible = false;
        },
        onClick() {
            if (this.disabled) return;

            if (this.visible) {
                this.hide();
            } else {
                this.show();
            }
        },
        initAriaAttributes() {
            this.popupElement.setAttribute('id', this.id);
            this.triggerElement.setAttribute('aria-haspopup', 'modal');
            this.triggerElement.setAttribute('aria-controls', this.id);
        },
        initEvents() {
            this.triggerElement = this.$slots.default[0].elm;
            this.popupElement = this.$refs.popup;

            this.triggerElement.addEventListener('click', this.onClick);
        },
    },
    mounted() {
        this.initEvents();
        this.initAriaAttributes();
    }
};
