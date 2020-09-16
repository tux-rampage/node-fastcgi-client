export enum FastCgiMessage {
    BeginRequest,
    AbortRequest,
    END_REQUEST,
    PARAMS,
    STDIN,
    STDOUT,
    STDERR,
    DATA,
    GET_VALUES,
    GET_VALUES_RESULT,
    UNKNOWN_TYPE,
    MAXTYPE
};

exports.PROTOCOL_STATUS = {
    FCGI_REQUEST_COMPLETE: 0,
    FCGI_CANT_MPX_CONN: 1,
    FCGI_OVERLOADED: 2,
    FCGI_UNKNOWN_ROLE: 3
};
