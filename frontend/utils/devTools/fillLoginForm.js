export function fillLoginForm(isNewUser) {
    const fields = [
        { id: 'name', value: 'Ben' },
        { id: 'email', value: 'benmcl@shaw.ca' },
        { id: 'password', value: 'benmcl@shaw.ca' },
        { id: 'confirmPassword', value: 'benmcl@shaw.ca' }
    ];

    fields.forEach((field) => document.getElementById(field.id).setAttribute('value', field.value));
}
