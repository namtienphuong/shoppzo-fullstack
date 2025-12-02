import { Link } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <header>
            <div>
                <div>
                    {/* LOGO */}
                    <div>
                        <Link href={'/'}>
                            <span>
                                Shoppz<span>o</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header