export async function fillContactForm(user) {
    const fields = [
        { id: 'name', value: 'Ben McAwesome' },
        { id: 'email', value: 'benmcl@shaw.ca' },
        { id: 'phoneNumber', value: '111-111-1111' },
        {
            id: 'message',
            value: 'One time I saw a guy eating a banana and I thought like whoa! Is he allowed to do that? I called Batman and he fixed the situation!'
        }
    ].filter((d) => d);

    function setNativeValue(element, value) {
        element.focus();
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

        if (valueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter.call(element, value);
        } else {
            valueSetter.call(element, value);
        }
    }

    for (let i = 0; i < fields.length; i++) {
        const input = document.getElementById(fields[i].id);
        setNativeValue(input, fields[i].value);
        await input.dispatchEvent(new Event('input', { bubbles: true }));
    }
}
