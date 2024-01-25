interface IErrorService {
    error(e: unknown): void;
    warning(): void;
}

class ErrorService implements IErrorService {
    log(message: string): void {
        console.log(message);
    }

    error(e: unknown) {
        if (e instanceof Error) {
            this.log(`Oops!: ${e.message}`);
        }
    }

    warning() {
        this.log('Warning...');
    }
}

export default new ErrorService();
