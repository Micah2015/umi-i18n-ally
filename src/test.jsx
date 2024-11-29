import { FormattedMessage, useIntl } from '@umijs/max';

export default () => {
    const intl = useIntl();

    return (
        <>
            <div>{intl.formatMessage({ id: 'navBar.lang' })}</div>
            <FormattedMessage id="layout.user.link.help" />
        </>
    )
}