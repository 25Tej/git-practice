export function successResponse(data: any) {
    return {
        status: 'success',
        data: data,
    };
}

export function errorResponse(message: string) {
    return {
        status: 'error',
        message: message,
    };
}