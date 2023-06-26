
        expect(mockSignUp).toHaveBeenCalledTimes(1);
        expect(mockSignUp).toHaveBeenCalledWith('user1', 'user1@test.com', 'password', 'password');
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith({ 
            type: 'auth/setAuthInfo',
            payload: { username: 'user1', id: 1, jti: 'uSeR-1-ToKeN' },
        });
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
});