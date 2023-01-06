import { NextPage } from 'next'
import React from 'react'

export type TypeRoles = {
	isOnlyUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = {
	children?: React.ReactNode
	Component: TypeRoles
}
